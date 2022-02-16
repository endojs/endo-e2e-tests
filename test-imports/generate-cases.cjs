const fs = require('fs/promises');
const path = require('path');
const pkgjson = require('./package.json');

const packageSignatureCode = `{ 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};`;
const packageSignatureFunction = new Function(
  'all',
  'def',
  `return ${packageSignatureCode}`,
);

const templates = {};
templates['cjs-default-true'] = ({ name, expected }) => `
const all = require('${name}');
const def = all.default;
exports.expected = ${expected};
exports.actual = ${packageSignatureCode}
`;
templates['cjs-default-false'] = ({ name, expected }) => `
const all = require('${name}');
let def;
exports.expected = ${expected};
exports.actual = ${packageSignatureCode}
`;
templates['esm-default-true'] = ({ name, expected }) => `
import * as all from '${name}';
import def from '${name}';
export const expected = ${expected};
export const actual = ${packageSignatureCode}
`;
templates['esm-default-false'] = ({ name, expected }) => `
import * as all from '${name}';
let def;
export const expected = ${expected};
export const actual = ${packageSignatureCode}
`;

const getExport = {
  esm: async name => import(name),
  cjs: async name => require(name),
};
async function generateFiles(basepath, cases) {
  return Promise.all(
    cases.map(async ({ type, name, file }) => {
      let all;
      try {
        all = await getExport[type](name);
      } catch (e) {
        // cannot require esm
        console.error(`Skipping ${file} because: `, e.message || e);
        return;
      }
      const expected = JSON.stringify(
        packageSignatureFunction(all, all.default),
      );
      const key = `${type}-default-${!!all.default}`;
      const source = templates[key]({ name, expected });
      await fs.writeFile(path.join(basepath, file), source);
      return file;
    }),
  );
}

async function generate(basepath, { overwrite }) {
  const existingCases = overwrite ? [] : await fs.readdir(basepath);
  const dependencies = Object.keys(pkgjson.dependencies);

  const requiredCases = [
    ...dependencies.map(pkg => ({
      type: 'cjs',
      name: pkg,
      file: `${pkg}.cjs`,
    })),
    ...dependencies.map(pkg => ({
      type: 'esm',
      name: pkg,
      file: `${pkg}.mjs`,
    })),
  ].filter(c => !existingCases.includes(c.file));

  return generateFiles(basepath, requiredCases);
}

const casesFolder = path.join(__dirname, './cases');

console.log(`Generating tests for all packaes listed as dependencies in ${__dirname}/package.json. 
  Tests are written to ${casesFolder}`);
const overwrite = process.argv[2] === 'overwrite';
overwrite ||
  console.log('  Pass "overwrite" to regenerate existing tests too.');

generate(casesFolder, { overwrite }).then(written => {
  console.log(`
${written.length} new tests generated
${written.sort().join('\n')}`);
});

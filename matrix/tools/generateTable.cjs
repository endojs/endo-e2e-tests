//@ts-check
const path = require('path');
const { readFileSync, readdirSync, writeFileSync } = require('fs');

const CASE_PATH = path.resolve(__dirname, '../cases/named-exports-cjs');
const RESULT_PATH = path.resolve(__dirname, '../results');
const TABLE_FILE = path.resolve(__dirname, '../table.md');

function listResultsFor(results, { num, key }) {
  return results.map((result) => {
    if (result.error) {
      return printError(result.name);
    }
    if (!result.data[num]) {
      return printMissing();
    }
    return printBooleans(result.data[num][key]);
  });
}

const TICKS = '```';
const printMissing = () => '?';
const printBooleans = ([own, truthy]) => (truthy ? '✔️' : (own ? '☑' : '❌'));
const printError = (name) => `[💥](#${name}-error)`;
function printTable(rows) {
  return rows.map((row) => `| ${row.join(' | ')} |`).join('\n');
}
function printFiles(files) {
  return files
    .map((f) => {
      return `
### file ${f}
${TICKS}js
${readFileSync(`${CASE_PATH}/${f}`)}
${TICKS}
`;
    })
    .join('\n');
}
function printErrors(results) {
  const errors = results
    .filter((r) => r.error)
    .map(
      (r) => `
### ${r.name} error
${TICKS}
${r.error?.message?.replace(/file:\/\/.*\//g, '')}
${TICKS}   
`,
    );
  if (errors.length) {
    return '# 💥 Errors\n\n' + errors.join('\n');
  }
  return '';
}
function printCase(row) {
  return `[${row.num + 1}.cjs](#file-${row.num + 1}cjs) ${row.key}`;
}

// List endo first, then node.*
const priority = (x) => ['node', 'endo', 'idea'].indexOf(x.substring(0, 4));
const results = readdirSync(RESULT_PATH).sort(
  (a, b) => priority(b) - priority(a),
);

Promise.all(
  results.map(async (filename) => {
    let result;
    try {
      result = JSON.parse(
        readFileSync(path.resolve(RESULT_PATH, filename), {
          encoding: 'utf-8',
        }),
      );
    } catch (error) {
      result = { error };
    }
    return result;
  }),
).then((results) => {
  const dataPrototype = results.find((a) => !a.error).data;
  const cjsFileList = dataPrototype.map((_, num) => `${num + 1}.cjs`);
  const rowsList = dataPrototype.flatMap((item, num) =>
    Object.keys(item).map((key) => ({ num, key })),
  );
  const header = ['', ...results.map((r) => r.name)];
  const bundlersStartAt =
    header.map((n) => n.substring(0, 4)).lastIndexOf('node') + 2;
  const divider = header.map((_) => ' --- ');
  const rows = [
    header,
    divider,
    ...rowsList.map((row) => [printCase(row), ...listResultsFor(results, row)]),
  ];

  writeFileSync(
    TABLE_FILE,
    `

# Import behavior matrix

What is available as a result of \`import * as namespace from "x.cjs"\`

❌ - missing  
☑ - own property, but falsy  
✔️ - truthy  

${printTable(rows)}

# Cases
${printFiles(cjsFileList)}

${printErrors(results)}

----

----

<style>
/* these are useful locally */
tr:nth-child(3n+1){
  border-top:2px solid #333 !important;
}
td:nth-child(n+${bundlersStartAt}){
  background-color: #eee !important;
}
</style>`,
  );

  console.error('[ ok ]');
});

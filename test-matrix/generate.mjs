//@ts-check
import { promisify } from 'util';
import { execFile } from 'child_process';
import { readFileSync } from 'fs';

const CASE_PATH = 'cases/named-exports-cjs'

const engines = [
    { name: 'node', bin: 'node', args: [`${CASE_PATH}/index.mjs`] },
    { name: 'endo', bin: 'node', args: [`${CASE_PATH}/endo.mjs`] },
    { name: 'webpack', bin: 'node', args: [`${CASE_PATH}/dist/webpack.js`] },
    { name: 'rollup', bin: 'node', args: [`${CASE_PATH}/dist/rollup.js`] },
    { name: 'parcel', bin: 'node', args: [`${CASE_PATH}/dist/parcel.js`] },
    { name: 'esbuild', bin: 'node', args: [`${CASE_PATH}/dist/esbuild.js`] },
    { name: 'typescript', bin: 'node', args: [`${CASE_PATH}/dist/tsc/index.js`] },
    { name: 'TS esModuleInterop', bin: 'node', args: [`${CASE_PATH}/dist/tscinterop/index.js`] },
]

const promiseExec = promisify(execFile);
async function getResults({ bin, args }) {
    const { stdout } = await promiseExec(bin, args);
    return JSON.parse(stdout);
}
function listResultsFor(results, { num, key }) {
    return results.map(result => {
        if (result.error) {
            return printError(result.name);
        }
        return printBoolean(result.data[num][key]);
    })
}

const TICKS = '```';
const printBoolean = (x) => (x ? '✔️' : '❌');
const printError = (name) => `[💥](#${name}-error)`;
function printTable(rows) {
    return rows.map(row => `| ${row.join(' | ')} |`).join('\n')
}
function printFiles(files) {
    return files.map(f => {
        return `
### file ${f}
${TICKS}js
${readFileSync(`${CASE_PATH}/${f}`)}
${TICKS}
`
    }).join('\n')
}
function printErrors(results) {
    return results.filter(r => r.error).map(r => `
### ${r.name} error
${TICKS}
${r.error.message.replace(/file:\/\/.*\//g,'')}
${TICKS}   
`).join('\n');
}
function printCase(row) {
    return `[${row.num + 1}.cjs](#file-${row.num + 1}cjs) ${row.key}`;
}
Promise.all(engines.map(async engine => {
    try {
        engine.data = await getResults(engine);
    } catch (error) {
        engine.error = error;
    }
    return engine;
})).then(results => {
    const dataPrototype = results.find(a => !a.error).data;
    const cjsFileList = dataPrototype.map((_, num) => `${num + 1}.cjs`);
    const rowsList = dataPrototype.flatMap((item, num) => Object.keys(item).map(key => ({ num, key })));
    const header = ['', ...results.map(r => r.name)];
    const divider = header.map(_ => ' --- ');
    const rows = [header, divider, ...rowsList.map(row => [printCase(row), ...listResultsFor(results, row)])]


    console.log(`

# Import behavior matrix

What is available as a result of \`import * as namespace from "x.cjs"\`

${printTable(rows)}

# Cases
${printFiles(cjsFileList)}
  

# 💥 Errors

${printErrors(results)}
    `)
})
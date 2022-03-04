import { promisify } from 'util';
import { execFile } from 'child_process';
import { readFileSync } from 'fs';

const CASE_PATH = 'cases/named-exports-cjs/'

const cases = [
    { name: 'node', file: `${CASE_PATH}/index.mjs` },
    { name: 'endo', file: `${CASE_PATH}/endo.mjs` },
    { name: 'webpack', file: `${CASE_PATH}/dist/webpack.js` },
    { name: 'rollup', file: `${CASE_PATH}/dist/rollup.js` },
    { name: 'parcel', file: `${CASE_PATH}/dist/parcel.js` },
    { name: 'esbuild', file: `${CASE_PATH}/dist/esbuild.js` },
]

const promiseExec = promisify(execFile);
async function getResults(file) {
    const { stdout } = await promiseExec('node', [file]);
    return JSON.parse(stdout);
}
function listResultsFor(results, { num, key }) {
    return results.map(result => {
        if (result.error) {
            return printError(result.error);
        }
        return printBoolean(result.data[num][key]);
    })
}

const printBoolean = (x) => (x ? '✔️' : '❌');
const printError = (e) => '💥';
function printTable(rows) {
    return rows.map(row => `| ${row.join(' | ')} |`).join('\n')
}
function printFiles(files) {
    return files.map(f => {
        const TICKS = '```';
        return `
${f}
${TICKS}js
${readFileSync(CASE_PATH + f)}
${TICKS}
`
    }).join('\n')
}
Promise.all(cases.map(async ca => {
    try {
        ca.data = await getResults(ca.file);
    } catch (error) {
        ca.error = error;
    }
    return ca;
})).then(results => {
    const dataPrototype = results.find(a => !a.error).data;
    const cjsFileList = dataPrototype.map((_, num) => `${num + 1}.cjs`);
    const rowsList = dataPrototype.flatMap((item, num) => Object.keys(item).map(key => ({ num, key })));
    const header = ['', ...results.map(r => r.name)];
    const divider = header.map(_ => ' --- ');
    const rows = [header, divider, ...rowsList.map(row => [`${row.num + 1}.cjs ${row.key}`, ...listResultsFor(results, row)])]


    console.log(`

# Import behavior matrix

What is available as a result of \`import * as namespace from "x.cjs"\`

${printTable(rows)}

# Cases
${printFiles(cjsFileList)}
    
    `)
})
//@ts-check
const { promisify } = require('util');
const { execFile } = require('child_process');
const { writeFileSync } = require('fs');
const path = require('path');

const CASE_PATH = path.resolve(__dirname, '../cases/import-cjs');
const RESULT_PATH = path.resolve(__dirname, '../results');

const engines = {
  node: { name: 'node', bin: 'node', args: [`${CASE_PATH}/index.mjs`] },
  endo: { name: 'endo', bin: 'node', args: [`${CASE_PATH}/endo.mjs`] },
  webpack: {
    name: 'webpack',
    bin: 'node',
    args: [`${CASE_PATH}/dist/webpack.js`],
  },
  rollup: {
    name: 'rollup',
    bin: 'node',
    args: [`${CASE_PATH}/dist/rollup.js`],
  },
  parcel: {
    name: 'parcel',
    bin: 'node',
    args: [`${CASE_PATH}/dist/parcel.js`],
  },
  esbuild: {
    name: 'esbuild',
    bin: 'node',
    args: [`${CASE_PATH}/dist/esbuild.js`],
  },
  tsc: { name: 'tsc', bin: 'node', args: [`${CASE_PATH}/dist/tsc/index.js`] },
  tscInterop: {
    name: 'tscInterop',
    bin: 'node',
    args: [`${CASE_PATH}/dist/tscinterop/index.js`],
  },
};

function logErr({ name }, stderr) {
  if (stderr) {
    console.error(`-${name}-stderr-------------------------vvvv`);
    console.error(stderr);
    console.error(`-${name}-stderr-------------------------^^^^`);
  }
}

const promiseExec = promisify(execFile);
async function getResults(engine) {
  if (engine.name === 'node') {
    engine.name = `node-${process.version.split('.')[0]}`;
  }

  try {
    const { stdout, stderr } = await promiseExec(engine.bin, engine.args);
    logErr(engine, stderr);
    engine.data = JSON.parse(stdout);
  } catch (error) {
    engine.error = error;
    console.error(
      ` ! Error in ${engine.name}. See ${RESULT_PATH}/${engine.name}.json`,
    );
  }
  writeFileSync(
    `${RESULT_PATH}/${engine.name}.json`,
    JSON.stringify(engine, null, 2),
  );
  console.error(`-write ${RESULT_PATH}/${engine.name}.json`);
}

const engineSelection = process.argv[2];

async function run() {
  if (engineSelection) {
    if (!engines[engineSelection]) {
      console.error(
        `'${engineSelection}' is not one of the engines available for testing.`,
      );
      process.exit(1);
    }
    await getResults(engines[engineSelection]);
  } else {
    await Promise.all(Object.values(engines).map(getResults));
  }
  console.error('[ ok ]');
}

run().catch(console.error);

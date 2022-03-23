import 'ses';
import { importLocation } from '@endo/compartment-mapper';

import { scaffold } from './tools/scaffold.mjs';

const readName = (name) => async (s) =>
  Buffer.from(
    s === 'file:///whatever.cjs'
      ? 'module.exports = globalThis.leak'
      : `{"name":"${name}"}`,
  );

const modules = {};
for (let name of [
  'assert',
  'fs',
  'path',
  'os',
  'util',
  'buffer',
  'crypto',
  'events',
  'stream',
  'readable-stream',
  'inherits',
]) {
  const ns = await import(name)
  modules[name] = (
    await importLocation(readName(name), 'file:///whatever.cjs', {
      globals: { leak: ns.default || ns },
    })
  ).namespace;
}

const processStub = { env: {}, _rawDebug: process._rawDebug };

const { testPackages } = scaffold({
  importLocation,
  globals: { process: processStub, global },
  modules,
  strictStar: false,
  // only: 'keccak.cjs'
});
testPackages();

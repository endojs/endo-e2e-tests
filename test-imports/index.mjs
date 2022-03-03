import 'ses';
import { importLocation } from '@endo/compartment-mapper';

import { scaffold } from './scaffold.mjs';

const readName = (name) => async (s) => Buffer.from(s === 'file:///whatever.cjs' ? 'module.exports = globalThis.leak' : `{"name":"${name}"}`);

const modules = {};
for (let name of ['assert', 'fs', 'path', 'os', 'util', 'buffer', 'crypto', 'events', 'stream']) {
  modules[name] = (await importLocation(readName(name), 'file:///whatever.cjs', { globals: { leak: await import(name) } })).namespace
}

const { testPackages } = scaffold({
  importLocation,
  globals: { process: { env: {} } },
  modules,
});
testPackages();

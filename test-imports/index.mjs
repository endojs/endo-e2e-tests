import 'ses';
import { importLocation } from '@endo/compartment-mapper';

import { scaffold } from './scaffold.mjs';

const read = async (s) => Buffer.from(s === 'file:///whatever.cjs' ? 'module.exports = globalThis.leak' : '{}');

const modules = {};
for (let name of ['assert', 'fs', 'path', 'os', 'util', 'buffer', 'crypto', 'events', 'stream']) {
  modules[name] = (await importLocation(read, 'file:///whatever.cjs', { globals: { leak: await import(name) } })).namespace
}

const { testPackages } = scaffold({
  importLocation,
  globals: { process: { env: {} } },
  modules,
});
testPackages();

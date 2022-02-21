import '../../endo/packages/ses/index.js';
import { importLocation } from '../../endo/packages/compartment-mapper/index.js';

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

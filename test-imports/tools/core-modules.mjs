
export const getModules = async (importLocation) => {
  const readName = (name, namedExportKeys) => async (s) => {
    if (s === 'file:///whatever.cjs') {
      const exporters = namedExportKeys.map(k => `exports.${k} = a;`).join('');
      return Buffer.from(`var a;${exporters}
        module.exports = globalThis.leak`);
    } else {
      return Buffer.from(`{"name":"${name}"}`);
    }
  };

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
    'http',
    'https',
    'zlib',
    'url',
    'net',
    'module',
    'tty',
    'constants',
    'querystring',
    'string_decoder',
  ]) {
    const ns = await import(name);
    const namedExportKeys = Object.keys(ns);
    const mod = (
      await importLocation(readName(name, namedExportKeys), 'file:///whatever.cjs', {
        globals: { leak: ns.default || ns },
      })
    ).namespace;
    modules[name] = mod;
    modules['node:' + name] = mod;
  }

  return modules;
}
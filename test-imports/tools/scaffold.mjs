import test from 'ava';
import fs from 'fs';
import { transformSource } from './sanitizeTransform.mjs';
import { getModules } from './core-modules.mjs';

function localUrl(path) {
  return new URL(path, import.meta.url).toString();
}

const importsTransform = (sourceType, parser) => (sourceBytes) => {
  const source = new TextDecoder().decode(sourceBytes);
  const object = transformSource(source, { sourceType });
  const objectBytes = new TextEncoder().encode(object.code);

  return { bytes: objectBytes, parser };
};
const moduleTransforms = {
  mjs: importsTransform('module', 'mjs'),
  cjs: importsTransform('script', 'cjs'),
};
const coreModuleNames = [
  'node:assert',
  'assert',
  'node:fs',
  'fs',
  'node:path',
  'path',
  'node:os',
  'os',
  'node:util',
  'util',
  'node:buffer',
  'buffer',
  'node:crypto',
  'crypto',
  'node:events',
  'events',
  'node:stream',
  'stream',
  'readable-stream',
  'inherits',
  'node:http',
  'http',
  'node:https',
  'https',
  'node:zlib',
  'zlib',
  'node:url',
  'url',
  'node:net',
  'net',
  'node:module',
  'module',
  'node:tty',
  'tty',
  'node:constants',
  'constants',
  'node:querystring',
  'querystring',
  'node:string_decoder',
  'string_decoder',
];

const CASES = '../cases/';
export function scaffold({
  importLocation,
  modules = {},
  globals = {},
  strictMatchingExports = false,
}) {
  return {
    async testPackages({ ext, only = null }) {
      const coreModules = await getModules(coreModuleNames);
      modules = Object.assign({}, coreModules, modules);

      globals = Object.assign(
        { process, global, console, globalThis, btoa, atob, Buffer },
        globalThis,
        globals,
      );

      let cases = fs.readdirSync(localUrl(CASES).replace('file://', ''));
      if (only) {
        if (!cases.includes(only)) {
          throw Error(`'${only}' is not one of the cases: \n ${cases}`);
        }
        cases = [only];
      }
      if (ext) {
        cases = cases.filter((c) => c.slice(-3) === ext);
      }

      cases.forEach((testCase) => {
        const read = async (location) =>
          fs.promises.readFile(new URL(location).pathname);
        const pkg = localUrl(`${CASES}${testCase}`);
        test(`[⬢ _] ${testCase}    Node.js baseline`, async (t) => {
          t.plan(1);

          const namespace = await import(pkg);
          return t.deepEqual(namespace.actual, namespace.expected);
        });
        test(`[⬢=▣] ${testCase}    import resolution matches`, async (t) => {
          t.plan(1);

          let endoPath;

          const { namespace } = await importLocation(
            async (location) => {
              if (
                !endoPath &&
                location.slice(-12) !== 'package.json' &&
                !location.includes('/test-imports/cases/')
              ) {
                // capture first import location of a test case
                endoPath = location;
              }
              return read(location);
            },
            pkg,
            {
              globals,
              modules,
              moduleTransforms,
            },
          );
          // note import.meta.resolve requires running node with --experimental-import-meta-resolve
          const nodePath = await import.meta.resolve(namespace.name);
          t.is(nodePath, endoPath);
        });
        test(`[▣ i] ${testCase}    Endo can import`, async (t) => {
          t.plan(1);

          await importLocation(read, pkg, {
            globals,
            modules,
            moduleTransforms,
          });
          return t.pass();
        });
        test(`[▣ *] ${testCase}    Endo import * gets ${
          strictMatchingExports ? '_exactly_' : '_at least_'
        } the exports Node.js got`, async (t) => {
          t.plan(1);

          const { namespace } = await importLocation(read, pkg, {
            globals,
            modules,
            moduleTransforms,
          });
          if (
            !strictMatchingExports &&
            namespace.expected['*'].type === 'object'
          ) {
            // It's ok to import more than node.js does
            const missingKeys = namespace.expected['*'].keys.filter(
              (missingKey) => !namespace.actual['*'].keys.includes(missingKey),
            );
            return t.assert(
              missingKeys.length === 0,
              `Missing named exports: ${missingKeys}`,
            );
          } else {
            return t.deepEqual(namespace.actual['*'], namespace.expected['*']);
          }
        });
        test(`[▣ d] ${testCase}    Endo imports default`, async (t) => {
          t.plan(1);

          const { namespace } = await importLocation(read, pkg, {
            globals,
            modules,
            moduleTransforms,
          });
          if (!namespace.expected.default) {
            return t.is.skip();
          }
          if (!strictMatchingExports) {
            namespace.actual.default.keys =
              namespace.actual.default.keys.filter((n) => n !== '__esModule');
            namespace.expected.default.keys =
              namespace.expected.default.keys.filter((n) => n !== '__esModule');
          }
          return t.deepEqual(
            namespace.actual.default,
            namespace.expected.default,
          );
        });
      });
    },
  };
}

import test from 'ava';
import fs from 'fs';
import { transformSource } from './sanitizeTransform.mjs';
import { getModules } from './core-modules.mjs';
import url from 'url';

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

function awaitLogs() {
  const logs = {
    __SUCCESS: 0,
    __FAILURE: 0,
  };
  let remaining, resolve;
  return {
    done: new Promise((re) => {
      resolve = re;
    }),
    plan(count) {
      remaining = count;
    },
    collect(name, message) {
      if (!message) {
        logs.__SUCCESS += 1;
        message = 'OK';
      } else {
        logs.__FAILURE += 1;
      }
      logs[name.replace(/^.*\]|( +)/, ' ').trim()] = message;
      remaining -= 1;
      if (remaining === 0) {
        resolve(Object.fromEntries(Object.entries(logs).sort()));
        // Sorting will ensure tests running in parallel are not affecting the snapshot.
        // Since entries are arrays, they get toString-ed to what we want to sort alphabetically anyway
      }
    },
  };
}

const CASES = '../cases/';
export function scaffold({
  importLocation,
  makeBundle,
  modules = {},
  globals = {},
  strictMatchingExports = false,
}) {
  return {
    async testPackages({ ext, only = null }) {
      const awaitingLogs = awaitLogs();

      function testWrapper(name, impl) {
        if (only) {
          return test(name, impl);
        }
        return test.failing(name, async (t) => {
          let message = null;
          try {
            await impl(t);
          } catch (e) {
            message = 'FAILED\n' + e.message;
            throw e;
          } finally {
            awaitingLogs.collect(name, message);
            t.fail('pass');
          }
        });
      }

      const coreModules = await getModules(coreModuleNames);
      modules = Object.assign({}, coreModules, modules);

      globals = Object.assign(
        { process, global, console, globalThis, btoa, atob, Buffer },
        globalThis,
        globals,
      );

      const read = async (location) =>
        fs.promises.readFile(new URL(location).pathname);

      const readPowers = {
        read,
        fileURLToPath: url.fileURLToPath, // required for __dirname support in endo
        canonical: async (p) => p,
      };

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

      awaitingLogs.plan(cases.length * 6);

      cases.forEach((testCase) => {
        const pkg = localUrl(`${CASES}${testCase}`);
        testWrapper(`[⬢ _] ${testCase}    Node.js baseline`, async (t) => {
          // t.plan(1);

          const namespace = await import(pkg);
          return t.deepEqual(namespace.actual, namespace.expected);
        });
        testWrapper(
          `[⬢=▣] ${testCase}    import resolution matches`,
          async (t) => {
            // t.plan(1);

            let endoPath;

            const { namespace } = await importLocation(
              {
                ...readPowers,
                read: async (location) => {
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
          },
        );
        testWrapper(`[▣ i] ${testCase}    Endo can import`, async (t) => {
          // t.plan(1);

          // const { namespace } =
          await importLocation(readPowers, pkg, {
            globals,
            modules,
            moduleTransforms,
          });
          return t.pass();
          // Snapshoting here could let us observe changes in support in mor detail.
          // Seems like an overkill for now.
          // return t.snapshot(namespace.actual);
        });
        testWrapper(
          `[▣ *] ${testCase}    Endo import * gets ${
            strictMatchingExports ? '_exactly_' : '_at least_'
          } the exports Node.js got`,
          async (t) => {
            // t.plan(1);

            const { namespace } = await importLocation(readPowers, pkg, {
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
                (missingKey) =>
                  !namespace.actual['*'].keys.includes(missingKey),
              );
              return t.assert(
                missingKeys.length === 0,
                `Missing named exports: ${missingKeys}`,
              );
            } else {
              return t.deepEqual(
                namespace.actual['*'],
                namespace.expected['*'],
              );
            }
          },
        );
        testWrapper(`[▣ d] ${testCase}    Endo imports default`, async (t) => {
          // t.plan(1);

          const { namespace } = await importLocation(readPowers, pkg, {
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
        testWrapper(`[▣ B] ${testCase}    Endo can bundle`, async (t) => {
          // t.plan(2);

          const bundle = await makeBundle(readPowers.read, pkg, {
            tags: ['browser'],
            moduleTransforms,
          });
          t.notThrows(() => {
            eval(bundle);
          }, 'Produced a bundle that throws.');
          return t.pass();
        });
      });

      test('ALL', async (t) => {
        t.snapshot(await awaitingLogs.done);
      });
    },
  };
}

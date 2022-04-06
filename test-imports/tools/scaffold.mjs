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

const CASES = '../cases/';
export function scaffold({
  importLocation,
  modules = {},
  globals = {},
  strictMatchingExports = false,
}) {
  return {
    async testPackages({ ext, only = null }) {
      const coreModules = await getModules(importLocation);
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
          if (!strictMatchingExports && namespace.expected['*'].type === 'object') {
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

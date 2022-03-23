import test from 'ava';
import fs from 'fs';

function localUrl(path) {
  return new URL(path, import.meta.url).toString();
}

const CASES = '../cases/';
export function scaffold({
  importLocation,
  modules = {},
  globals = {},
  strictStar = false,
  only = null,
}) {
  return {
    testPackages() {
      let cases = fs.readdirSync(localUrl(CASES).replace('file://', ''));
      if (only) {
        if (!cases.includes(only)) {
          throw Error(`'${only}' is not one of the cases: \n ${cases}`);
        }
        cases = [only];
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
          });
          return t.pass();
        });
        test(`[▣ *] ${testCase}    Endo import * gets ${
          strictStar ? '_exactly_' : '_at least_'
        } the exports Node.js got`, async (t) => {
          t.plan(1);

          const { namespace } = await importLocation(read, pkg, {
            globals,
            modules,
          });
          if (!strictStar && namespace.expected['*'].type === 'object') {
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
          });
          return t.deepEqual(
            namespace.actual.default,
            namespace.expected.default,
          );
        });
      });
    },
  };
}

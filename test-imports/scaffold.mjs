import test from 'ava';
import fs from 'fs';

function localUrl(path) {
  return new URL(path, import.meta.url).toString();
}

export function scaffold({ importLocation, modules = {}, globals = {} }) {
  return {
    testPackages() {
      const cases = fs.readdirSync(localUrl('./cases/').replace('file://', ''));

      cases.forEach(testCase => {
        const read = async location =>
          fs.promises.readFile(new URL(location).pathname);
        const pkg = localUrl(`./cases/${testCase}`);
        test(`⬢ ${testCase}    Node.js baseline`, async t => {
          t.plan(1);

          const namespace = await import(pkg);
          return t.deepEqual(namespace.actual, namespace.expected);
        });
        test(`▣ ${testCase}    Endo can import`, async t => {
          t.plan(1);

          await importLocation(read, pkg, {
            globals,
            modules,
          });
          return t.pass();
        });
        test(`▣ ${testCase}    Endo imports namespace`, async t => {
          t.plan(1);

          const { namespace } = await importLocation(read, pkg, {
            globals,
            modules,
          });
          return t.deepEqual(namespace.actual, namespace.expected);
        });
      });
    },
  };
}

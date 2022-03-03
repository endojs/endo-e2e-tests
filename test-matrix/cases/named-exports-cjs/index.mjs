import * as ns_1 from './1.cjs';
import * as ns_2 from './2.cjs';
import * as ns_3 from './3.cjs';
import * as ns_4 from './4.cjs';
import * as ns_5 from './5.cjs';
const results = [ns_1, ns_2, ns_3, ns_4, ns_5];
// console.log(results)

const check = (x) => (x ? '✔️' : '❌');

const checks = {
  default: (ns) => check(Object.hasOwn(ns, 'default')),
  no: (ns) => check(Object.hasOwn(ns, 'no')),
  even: (ns) => check(Object.hasOwn(ns, 'even')),
  'default<br>.even': (ns) => check(ns && ns.default && ns.default.even),
};

if (typeof process !== 'undefined' && process.argv[2] === 'columns') {
  console.log(
    '| | ' +
      results
        .map((_, x) =>
          Object.keys(checks)
            .map((c) => `${x + 1}.cjs:<br>${c}`)
            .join(' | '),
        )
        .join(' |  '),
  );
  console.log(
    '| --- | ' +
      results
        .map((_, x) =>
          Object.keys(checks)
            .map((c) => '---')
            .join(' | '),
        )
        .join(' |  '),
  );
} else {
  const row = results
    .map((namespace) =>
      Object.keys(checks)
        .map((key) => checks[key](namespace))
        .join(' | '),
    )
    .join(' |   ');
  console.log(row);
}

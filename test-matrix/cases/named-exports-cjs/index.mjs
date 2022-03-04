import * as ns_1 from './1.cjs';
import * as ns_2 from './2.cjs';
import * as ns_3 from './3.cjs';
import * as ns_4 from './4.cjs';
import * as ns_5 from './5.cjs';

export const results = [ns_1, ns_2, ns_3, ns_4, ns_5];
const checks = {
    'has default': (ns) => Object.hasOwn(ns, 'default'),
    'has unreachable': (ns) => Object.hasOwn(ns, 'unreachable'),
    'has even': (ns) => Object.hasOwn(ns, 'even'),
    'has default.even': (ns) => !!(ns && ns.default && ns.default.even),
};

const data = results
    .map((namespace) =>
        Object.keys(checks)
            .reduce((acc, key) => Object.assign(acc, { [key]: !!checks[key](namespace) }), {})

    )

console.log(JSON.stringify(data));

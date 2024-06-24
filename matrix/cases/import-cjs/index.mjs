import * as ns_1 from './1.cjs';
import * as ns_2 from './2.cjs';
import * as ns_3 from './3.cjs';
import * as ns_4 from './4.cjs';
import * as ns_5 from './5.cjs';
import * as ns_6 from './6.cjs';
import * as ns_7 from './7.cjs';
import * as ns_8 from './8.cjs';
import * as ns_9 from './9.cjs';
import * as ns_10 from './10.cjs';
import * as ns_11 from './11.cjs';
import * as ns_12 from './12.cjs';
import * as ns_13 from './13.cjs';

export const results = [ns_1, ns_2, ns_3, ns_4, ns_5, ns_6,ns_7,ns_8,ns_9,ns_10,ns_11,ns_12,ns_13];
const has = (obj,key) => Object.prototype.hasOwnProperty.call(obj,key)
const checks = {
    // '__esModule': (ns) => [has(ns, '__esModule'),!!ns.__esModule],
    'even': (ns) => [has(ns, 'even'),!!ns.even],
    'default': (ns) => [has(ns, 'default'),!!ns.default],
    'default.even': (ns) => [!!(ns && ns.default && has(ns.default, 'even')),!!(ns && ns.default && ns.default.even)],
};

const data = results
    .map((namespace) =>
        Object.keys(checks)
            .reduce((acc, key) => Object.assign(acc, { [key]: checks[key](namespace) }), {})

    )

console.log(JSON.stringify(data));

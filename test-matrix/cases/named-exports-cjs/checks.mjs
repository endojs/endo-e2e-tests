
export const checks = {
    'has default': (ns) => Object.hasOwn(ns, 'default'),
    'has unreachable': (ns) => Object.hasOwn(ns, 'unreachable'),
    'has even': (ns) => Object.hasOwn(ns, 'even'),
    'has default.even': (ns) => !!(ns && ns.default && ns.default.even),
};
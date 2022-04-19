
const all = require('ethereumjs-common');
const def = all.default;
exports.name = 'ethereumjs-common';
exports.expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"function","keys":["_getChainParams","forCustomChain"]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

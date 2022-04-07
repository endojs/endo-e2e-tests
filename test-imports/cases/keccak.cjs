
const all = require('keccak');
let def;
exports.name = 'keccak';
exports.expected = {"*":{"type":"function","keys":[]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};


const all = require('@noble/hashes/crypto');
let def;
exports.name = '@noble/hashes/crypto';
exports.expected = {"*":{"type":"object","keys":["crypto"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

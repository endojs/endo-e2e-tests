
const all = require('which');
let def;
exports.name = 'which';
exports.expected = {"*":{"type":"function","keys":["sync"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

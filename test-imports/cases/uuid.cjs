
const all = require('uuid');
let def;
exports.name = 'uuid';
exports.expected = {"*":{"type":"object","keys":["NIL","parse","stringify","v1","v3","v4","v5","validate","version"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

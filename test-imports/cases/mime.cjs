
const all = require('mime');
let def;
exports.name = 'mime';
exports.expected = {"*":{"type":"object","keys":["_extensions","_types","define","getExtension","getType"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};


const all = require('multiformats');
let def;
exports.name = 'multiformats';
exports.expected = {"*":{"type":"object","keys":["CID","bytes","digest","hasher","varint"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

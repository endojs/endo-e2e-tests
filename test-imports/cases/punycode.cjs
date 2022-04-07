
const all = require('punycode');
let def;
exports.name = 'punycode';
exports.expected = {"*":{"type":"object","keys":["decode","encode","toASCII","toUnicode","ucs2","version"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

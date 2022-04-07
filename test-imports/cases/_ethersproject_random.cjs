
const all = require('@ethersproject/random');
let def;
exports.name = '@ethersproject/random';
exports.expected = {"*":{"type":"object","keys":["randomBytes","shuffled"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

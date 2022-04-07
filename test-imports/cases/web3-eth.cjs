
const all = require('web3-eth');
let def;
exports.name = 'web3-eth';
exports.expected = {"*":{"type":"function","keys":["givenProvider","providers"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

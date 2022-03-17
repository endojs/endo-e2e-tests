
const all = require('elliptic');
let def;
exports.expected = {"*":{"type":"object","keys":["curve","curves","ec","eddsa","rand","utils","version"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

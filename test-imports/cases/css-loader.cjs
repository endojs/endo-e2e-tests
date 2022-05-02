
const all = require('css-loader');
let def;
exports.name = 'css-loader';
exports.expected = {"*":{"type":"function","keys":["defaultGetLocalIdent"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

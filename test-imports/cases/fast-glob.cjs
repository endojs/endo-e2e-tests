
const all = require('fast-glob');
let def;
exports.name = 'fast-glob';
exports.expected = {"*":{"type":"function","keys":["escapePath","generateTasks","isDynamicPattern","stream","sync"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

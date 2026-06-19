
const all = require('lowdb');
let def;
exports.name = 'lowdb';
exports.expected = {"*":{"type":"object","keys":["JSONFile","JSONFileSync","LocalStorage","Low","LowSync","Memory","MemorySync","TextFile","TextFileSync"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

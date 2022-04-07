
const all = require('json-rpc-engine');
let def;
exports.name = 'json-rpc-engine';
exports.expected = {"*":{"type":"object","keys":["JsonRpcEngine","createAsyncMiddleware","createIdRemapMiddleware","createScaffoldMiddleware","getUniqueId","mergeMiddleware"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};


import * as all from 'json-rpc-engine';
import def from 'json-rpc-engine';
export const expected = {"*":{"type":"object","keys":["JsonRpcEngine","__esModule","createAsyncMiddleware","createIdRemapMiddleware","createScaffoldMiddleware","default","getUniqueId","mergeMiddleware"]},"default":{"type":"object","keys":["JsonRpcEngine","createAsyncMiddleware","createIdRemapMiddleware","createScaffoldMiddleware","getUniqueId","mergeMiddleware"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

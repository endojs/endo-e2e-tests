
import * as all from 'multiformats';
let def;
export const name = 'multiformats';
export const expected = {"*":{"type":"object","keys":["CID","bytes","digest","hasher","varint"]},"default":{"type":"undefined","keys":[]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};


import * as all from '@noble/hashes/crypto';
let def;
export const name = '@noble/hashes/crypto';
export const expected = {"*":{"type":"object","keys":["crypto"]},"default":{"type":"undefined","keys":[]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

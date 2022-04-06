
import * as all from '@noble/hashes/sha3';
let def;
export const expected = {"*":{"type":"object","keys":["Keccak","keccakP","keccak_224","keccak_256","keccak_384","keccak_512","sha3_224","sha3_256","sha3_384","sha3_512","shake128","shake256"]},"default":{"type":"undefined","keys":[]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

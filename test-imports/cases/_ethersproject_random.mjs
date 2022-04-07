
import * as all from '@ethersproject/random';
import def from '@ethersproject/random';
export const name = '@ethersproject/random';
export const expected = {"*":{"type":"object","keys":["__esModule","default","randomBytes","shuffled"]},"default":{"type":"object","keys":["randomBytes","shuffled"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

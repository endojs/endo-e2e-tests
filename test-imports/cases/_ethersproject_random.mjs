
import * as all from '@ethersproject/random';
// manually deleted default import - esm doesn't have one, node generaets implicit
export const name = '@ethersproject/random';
export const expected = {"*":{"type":"object","keys":["__esModule","default","randomBytes","shuffled"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
};

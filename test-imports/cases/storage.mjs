
import * as all from 'storage';
import def from 'storage';
export const name = 'storage';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"function","keys":[]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

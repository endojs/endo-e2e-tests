
import * as all from 'rc';
import def from 'rc';
export const name = 'rc';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"function","keys":[]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

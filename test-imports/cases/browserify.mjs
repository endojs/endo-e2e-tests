
import * as all from 'browserify';
import def from 'browserify';
export const name = 'browserify';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"function","keys":[]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

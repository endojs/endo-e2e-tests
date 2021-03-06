
import * as all from 'browser-resolve';
import def from 'browser-resolve';
export const name = 'browser-resolve';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"function","keys":["sync"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};


import * as all from 'ethereumjs-common';
import def from 'ethereumjs-common';
export const name = 'ethereumjs-common';
export const expected = {"*":{"type":"object","keys":["__esModule","default"]},"default":{"type":"object","keys":["default"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};


import * as all from 'mime';
import def from 'mime';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"object","keys":["_extensions","_types","define","getExtension","getType"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

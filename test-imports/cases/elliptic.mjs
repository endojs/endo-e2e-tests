
import * as all from 'elliptic';
import def from 'elliptic';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"object","keys":["curve","curves","ec","eddsa","rand","utils","version"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

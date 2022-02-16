
import * as all from 'uuid';
let def;
export const expected = {"*":{"type":"object","keys":["NIL","parse","stringify","v1","v3","v4","v5","validate","version"]},"default":{"type":"undefined","keys":[]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

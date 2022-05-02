
import * as all from 'fast-glob';
import def from 'fast-glob';
export const name = 'fast-glob';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"function","keys":["escapePath","generateTasks","isDynamicPattern","stream","sync"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

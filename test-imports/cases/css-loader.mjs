
import * as all from 'css-loader';
import def from 'css-loader';
export const name = 'css-loader';
export const expected = {"*":{"type":"object","keys":["default","defaultGetLocalIdent"]},"default":{"type":"function","keys":["defaultGetLocalIdent"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

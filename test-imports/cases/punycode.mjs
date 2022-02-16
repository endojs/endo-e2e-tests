
import * as all from 'punycode';
import def from 'punycode';
export const expected = {"*":{"type":"object","keys":["decode","default","encode","toASCII","toUnicode","ucs2","version"]},"default":{"type":"object","keys":["decode","encode","toASCII","toUnicode","ucs2","version"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

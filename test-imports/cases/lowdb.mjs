
import * as all from 'lowdb';
let def;
export const name = 'lowdb';
export const expected = {"*":{"type":"object","keys":["JSONFile","JSONFileSync","LocalStorage","Low","LowSync","Memory","MemorySync","TextFile","TextFileSync"]},"default":{"type":"undefined","keys":[]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};


import * as all from 'bignumber.js';
import def from 'bignumber.js';
export const name = 'bignumber.js';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"function","keys":["BigNumber","EUCLID","ROUND_CEIL","ROUND_DOWN","ROUND_FLOOR","ROUND_HALF_CEIL","ROUND_HALF_DOWN","ROUND_HALF_EVEN","ROUND_HALF_FLOOR","ROUND_HALF_UP","ROUND_UP","clone","config","default","isBigNumber","max","maximum","min","minimum","random","set","sum"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

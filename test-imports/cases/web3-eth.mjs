
import * as all from 'web3-eth';
import def from 'web3-eth';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"function","keys":["givenProvider","providers"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

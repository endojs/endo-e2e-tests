
import * as all from 'ethers';
// manually deleted default import - esm doesn't have one, node generaets implicit
export const name = 'ethers';
export const expected = {"*":{"type":"object","keys":["BaseContract","BigNumber","Contract","ContractFactory","FixedNumber","Signer","VoidSigner","Wallet","Wordlist","__esModule","constants","default","errors","ethers","getDefaultProvider","logger","providers","utils","version","wordlists"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
};

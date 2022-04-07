
const all = require('ethers');
let def;
exports.name = 'ethers';
exports.expected = {"*":{"type":"object","keys":["BaseContract","BigNumber","Contract","ContractFactory","FixedNumber","Signer","VoidSigner","Wallet","Wordlist","constants","errors","ethers","getDefaultProvider","logger","providers","utils","version","wordlists"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

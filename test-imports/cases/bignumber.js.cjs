
const all = require('bignumber.js');
const def = all.default;
exports.name = 'bignumber.js';
exports.expected = {"*":{"type":"function","keys":["BigNumber","EUCLID","ROUND_CEIL","ROUND_DOWN","ROUND_FLOOR","ROUND_HALF_CEIL","ROUND_HALF_DOWN","ROUND_HALF_EVEN","ROUND_HALF_FLOOR","ROUND_HALF_UP","ROUND_UP","clone","config","default","isBigNumber","max","maximum","min","minimum","random","set","sum"]},"default":{"type":"function","keys":["BigNumber","EUCLID","ROUND_CEIL","ROUND_DOWN","ROUND_FLOOR","ROUND_HALF_CEIL","ROUND_HALF_DOWN","ROUND_HALF_EVEN","ROUND_HALF_FLOOR","ROUND_HALF_UP","ROUND_UP","clone","config","default","isBigNumber","max","maximum","min","minimum","random","set","sum"]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

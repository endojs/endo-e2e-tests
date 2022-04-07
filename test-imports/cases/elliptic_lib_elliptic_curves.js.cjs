
const all = require('elliptic/lib/elliptic/curves.js');
let def;
exports.name = 'elliptic/lib/elliptic/curves.js';
exports.expected = {"*":{"type":"object","keys":["PresetCurve","curve25519","ed25519","p192","p224","p256","p384","p521","secp256k1"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

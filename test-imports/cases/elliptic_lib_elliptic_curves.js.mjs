
import * as all from 'elliptic/lib/elliptic/curves.js';
import def from 'elliptic/lib/elliptic/curves.js';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"object","keys":["PresetCurve","curve25519","ed25519","p192","p224","p256","p384","p521","secp256k1"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};


const all = require('polycrc');
let def;
exports.name = 'polycrc';
exports.expected = {"*":{"type":"object","keys":["CRC","crc","crc1","crc10","crc16","crc24","crc32","crc32c","crc6","crc8","makeBufferConverter","models"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

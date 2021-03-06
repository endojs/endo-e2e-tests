
const all = require('ethereumjs-util');
let def;
exports.name = 'ethereumjs-util';
exports.expected = {"*":{"type":"object","keys":["Account","Address","BN","KECCAK256_NULL","KECCAK256_NULL_S","KECCAK256_RLP","KECCAK256_RLP_ARRAY","KECCAK256_RLP_ARRAY_S","KECCAK256_RLP_S","MAX_INTEGER","TWO_POW256","TypeOutput","addHexPrefix","arrayContainsArray","baToJSON","bnToHex","bnToRlp","bnToUnpaddedBuffer","bufferToHex","bufferToInt","defineProperties","ecrecover","ecsign","fromAscii","fromRpcSig","fromSigned","fromUtf8","generateAddress","generateAddress2","getBinarySize","getKeys","hashPersonalMessage","importPublic","intToBuffer","intToHex","isHexPrefixed","isHexString","isValidAddress","isValidChecksumAddress","isValidPrivate","isValidPublic","isValidSignature","isZeroAddress","keccak","keccak256","keccakFromArray","keccakFromHexString","keccakFromString","padToEven","privateToAddress","privateToPublic","pubToAddress","publicToAddress","ripemd160","ripemd160FromArray","ripemd160FromString","rlp","rlphash","setLengthLeft","setLengthRight","sha256","sha256FromArray","sha256FromString","stripHexPrefix","toAscii","toBuffer","toChecksumAddress","toCompactSig","toRpcSig","toType","toUnsigned","toUtf8","unpadArray","unpadBuffer","unpadHexString","zeroAddress","zeros"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

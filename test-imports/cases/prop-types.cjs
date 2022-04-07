
const all = require('prop-types');
let def;
exports.name = 'prop-types';
exports.expected = {"*":{"type":"object","keys":["PropTypes","any","array","arrayOf","bigint","bool","checkPropTypes","element","elementType","exact","func","instanceOf","node","number","object","objectOf","oneOf","oneOfType","resetWarningCache","shape","string","symbol"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

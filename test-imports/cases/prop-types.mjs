
import * as all from 'prop-types';
import def from 'prop-types';
export const name = 'prop-types';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"object","keys":["PropTypes","any","array","arrayOf","bigint","bool","checkPropTypes","element","elementType","exact","func","instanceOf","node","number","object","objectOf","oneOf","oneOfType","resetWarningCache","shape","string","symbol"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

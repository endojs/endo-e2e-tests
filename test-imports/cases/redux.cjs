
const all = require('redux');
let def;
exports.name = 'redux';
exports.expected = {"*":{"type":"object","keys":["__DO_NOT_USE__ActionTypes","applyMiddleware","bindActionCreators","combineReducers","compose","createStore"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

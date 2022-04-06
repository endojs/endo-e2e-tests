
import * as all from 'redux';
import def from 'redux';
export const expected = {"*":{"type":"object","keys":["__DO_NOT_USE__ActionTypes","__esModule","applyMiddleware","bindActionCreators","combineReducers","compose","createStore","default"]},"default":{"type":"object","keys":["__DO_NOT_USE__ActionTypes","applyMiddleware","bindActionCreators","combineReducers","compose","createStore"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

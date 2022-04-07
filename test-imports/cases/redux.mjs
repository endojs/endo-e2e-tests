
import * as all from 'redux';
// manually deleted default import - esm doesn't have one, node generaets implicit
export const name = 'redux';
export const expected = {"*":{"type":"object","keys":["__DO_NOT_USE__ActionTypes","__esModule","applyMiddleware","bindActionCreators","combineReducers","compose","createStore","default"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
};

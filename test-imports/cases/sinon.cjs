
const all = require('sinon');
let def;
exports.name = 'sinon';
exports.expected = {"*":{"type":"object","keys":["FakeXMLHttpRequest","addBehavior","assert","createFakeServer","createFakeServerWithClock","createSandbox","createStubInstance","defaultConfig","expectation","fake","fakeServer","fakeServerWithClock","getFakes","getRestorers","inject","leakThreshold","match","mock","promise","replace","replaceGetter","replaceSetter","reset","resetBehavior","resetHistory","restore","restoreContext","restoreObject","serverPrototype","setFormatter","spy","stub","timers","useFakeServer","useFakeTimers","useFakeXMLHttpRequest","usingPromise","verify","verifyAndRestore","xhr"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

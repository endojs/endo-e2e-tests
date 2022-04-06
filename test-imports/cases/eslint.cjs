
const all = require('eslint');
let def;
exports.expected = {"*":{"type":"object","keys":["ESLint","Linter","RuleTester","SourceCode"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};


import * as all from 'eslint';
import def from 'eslint';
export const expected = {"*":{"type":"object","keys":["ESLint","Linter","RuleTester","SourceCode","default"]},"default":{"type":"object","keys":["ESLint","Linter","RuleTester","SourceCode"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

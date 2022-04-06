
const all = require('acorn');
let def;
exports.expected = {"*":{"type":"object","keys":["Node","Parser","Position","SourceLocation","TokContext","Token","TokenType","defaultOptions","getLineInfo","isIdentifierChar","isIdentifierStart","isNewLine","keywordTypes","lineBreak","lineBreakG","nonASCIIwhitespace","parse","parseExpressionAt","tokContexts","tokTypes","tokenizer","version"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

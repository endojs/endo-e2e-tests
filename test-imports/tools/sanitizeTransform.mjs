import * as babelParser from '@babel/parser';
import babelGenerate from '@agoric/babel-generator';
import babelTraverse from '@babel/traverse';

const parseBabel = babelParser.default
  ? babelParser.default.parse
  : babelParser.parse || babelParser;

function rewriteComment(node) {
  node.type = 'CommentBlock';
  // For the test purposes, instead of sanitizing comments, let's simply make them empty
  node.value = '';

}
function transformAst(ast) {
  (babelTraverse.default || babelTraverse)(ast, {
    enter(p) {
      const { comments, leadingComments, innerComments, trailingComments } =
        p.node;
      if (p.node.type === 'StringLiteral') {
        p.node.value = p.node.value.replace(/import\(/g, 'import\\(');
      }
      (comments || []).forEach((node) => rewriteComment(node));
      // Rewrite all comments.
      (leadingComments || []).forEach((node) => rewriteComment(node));
      if (p.node.type.startsWith('Comment')) {
        rewriteComment(p.node);
      }
      (innerComments || []).forEach((node) => rewriteComment(node));
      (trailingComments || []).forEach((node) => rewriteComment(node));
    },
  });
}

export function transformSource(code, { sourceType } = {}) {
  const ast = parseBabel(code, {
    sourceType,
  });

  transformAst(ast);

  return (babelGenerate.default || babelGenerate)(ast, {
    retainLines: true,
  });
}

import * as babelParser from '@babel/parser';
import babelGenerate from '@agoric/babel-generator';
import babelTraverse from '@babel/traverse';
import * as t from '@babel/types';

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
      // Let modules use the tamed eval
      if (
        p.node.name === 'eval' &&
        !(
          p.parentPath.isSequenceExpression() ||
          p.parentPath.isObjectExpression()
        )
      ) {
        try {
          p.replaceWith(
            t.sequenceExpression([t.numericLiteral(0), t.identifier('eval')]),
          );
        } catch (e) {
          // console.error(e)
          // errors happen here if a node happens to be called eval but is not eval. eg { eval: 1 }
        }
      }
      // Defuse import statement triggers in string literals without affecting the resulting string
      if (p.node.type === 'StringLiteral') {
        p.node.value = p.node.value.replace(/import\(/g, 'import\\(');
      }
      // Rewrite all comments.
      (comments || []).forEach((node) => rewriteComment(node));
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
    allowReturnOutsideFunction: true,
  });

  transformAst(ast);

  return (babelGenerate.default || babelGenerate)(ast, {
    retainLines: true,
  });
}

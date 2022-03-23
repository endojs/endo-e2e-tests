'use strict';
// derived from real package
var letsCallItSomethingElse = exports;
function defineThingy(name) {
  Object.defineProperty(letsCallItSomethingElse, name, {
    configurable: true,
    enumerable: true,
    get: function() {
      Object.defineProperty(letsCallItSomethingElse, name, {
        configurable: true,
        enumerable: true,
        value: true
      });
      return true
    },
  });
}
defineThingy('even')

//popular shape of typescript output for reexports
const ex = require('./1.cjs');
Object.defineProperty(exports, 'even', {
  enumerable: true,
  get() {
    return ex.even
  }
});
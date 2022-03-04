

# Import behavior matrix

What is available as a result of `import * as namespace from "x.cjs"`

|  | node | endo | webpack | rollup | parcel | esbuild | typescript | TS esModuleInterop |
|  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |
| [1.cjs](#file-1cjs) has default | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [1.cjs](#file-1cjs) has unreachable | ✔️ | [💥](#endo-error) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [1.cjs](#file-1cjs) has even | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [1.cjs](#file-1cjs) has default.even | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [2.cjs](#file-2cjs) has default | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [2.cjs](#file-2cjs) has unreachable | ✔️ | [💥](#endo-error) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [2.cjs](#file-2cjs) has even | ❌ | [💥](#endo-error) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [2.cjs](#file-2cjs) has default.even | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [3.cjs](#file-3cjs) has default | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ |
| [3.cjs](#file-3cjs) has unreachable | ✔️ | [💥](#endo-error) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [3.cjs](#file-3cjs) has even | ❌ | [💥](#endo-error) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [3.cjs](#file-3cjs) has default.even | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ |
| [4.cjs](#file-4cjs) has default | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ |
| [4.cjs](#file-4cjs) has unreachable | ✔️ | [💥](#endo-error) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [4.cjs](#file-4cjs) has even | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [4.cjs](#file-4cjs) has default.even | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ |
| [5.cjs](#file-5cjs) has default | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [5.cjs](#file-5cjs) has unreachable | ❌ | [💥](#endo-error) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [5.cjs](#file-5cjs) has even | ❌ | [💥](#endo-error) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [5.cjs](#file-5cjs) has default.even | ✔️ | [💥](#endo-error) | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |

# Cases

### file 1.cjs
```js
module.exports = {
  even: n => n % 2 === 0
};

if (false) {
  module.exports.unreachable = 1;
}
```


### file 2.cjs
```js
module.exports = {
  version: '1.1.0',
  even: n => n % 2 === 0
};

if (false) {
  module.exports.unreachable = 1;
}
```


### file 3.cjs
```js
module.exports = {
  __esModule: true,
  version: '1.1.0',
  even: n => n % 2 === 0
};

if (false) {
  module.exports.unreachable = 1;
}
```


### file 4.cjs
```js
exports.__esModule = true;

exports.version = '1.1.0';
exports.even = n => n % 2 === 0;

if (false) {
  exports.unreachable = 1;
}
```


### file 5.cjs
```js
const api = {
  version: '1.1.0',
  even: n => n % 2 === 0,
}
if (false) {
  api.unreachable = 1;
}
module.exports = api
```

  

# 💥 Errors


### endo error
```
Command failed: node cases/named-exports-cjs/endo.mjs
ses.umd.js:4820
          throw SyntaxError(
                ^

SyntaxError: The requested module './1.cjs' does not provide an export named '*'
    at imports (ses.umd.js:4820:17)
    at eval (index.mjs:1:111)
    at execute (ses.umd.js:4891:9)
    at compartmentImportNow (ses.umd.js:5203:3)
    at ses.umd.js:5272:27
    at async endo.mjs:13:1

```   

    

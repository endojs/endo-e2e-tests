

# Import behavior matrix

What is available as a result of `import * as namespace from "x.cjs"`

|  | node | endo | webpack | rollup | parcel | esbuild | typescript | TS esModuleInterop |
|  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |
| [1.cjs](#file-1cjs) has default | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [1.cjs](#file-1cjs) has unreachable | ✔️ | ✔️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [1.cjs](#file-1cjs) has even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [1.cjs](#file-1cjs) has default.even | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [2.cjs](#file-2cjs) has default | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [2.cjs](#file-2cjs) has unreachable | ✔️ | ✔️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [2.cjs](#file-2cjs) has even | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [2.cjs](#file-2cjs) has default.even | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [3.cjs](#file-3cjs) has default | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ |
| [3.cjs](#file-3cjs) has unreachable | ✔️ | ✔️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [3.cjs](#file-3cjs) has even | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [3.cjs](#file-3cjs) has default.even | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ |
| [4.cjs](#file-4cjs) has default | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ |
| [4.cjs](#file-4cjs) has unreachable | ✔️ | ✔️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [4.cjs](#file-4cjs) has even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [4.cjs](#file-4cjs) has default.even | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ |
| [5.cjs](#file-5cjs) has default | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [5.cjs](#file-5cjs) has unreachable | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [5.cjs](#file-5cjs) has even | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [5.cjs](#file-5cjs) has default.even | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [6.cjs](#file-6cjs) has default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [6.cjs](#file-6cjs) has unreachable | ✔️ | ✔️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [6.cjs](#file-6cjs) has even | ✔️ | ✔️ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [6.cjs](#file-6cjs) has default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |

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


### file 6.cjs
```js
const even = n => n % 2 === 0;
if (false) {
  module.exports.unreachable = 1;
}
// "The Infamous Triplet"
module.exports = even
module.exports.even = even
module.exports.default = even
```

  

# 💥 Errors


    

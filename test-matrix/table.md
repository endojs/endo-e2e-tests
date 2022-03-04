

# Import behavior matrix

What is available as a result of `import * as namespace from "x.cjs"`

|  | node | endo | webpack | rollup | parcel |
|  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |
| 1.cjs has default | ✔️ | 💥 | ✔️ | ✔️ | ❌ |
| 1.cjs has unreachable | ✔️ | 💥 | ❌ | ❌ | ❌ |
| 1.cjs has even | ✔️ | 💥 | ✔️ | ✔️ | ✔️ |
| 1.cjs has default.even | ✔️ | 💥 | ✔️ | ✔️ | ❌ |
| 2.cjs has default | ✔️ | 💥 | ✔️ | ✔️ | ❌ |
| 2.cjs has unreachable | ✔️ | 💥 | ❌ | ❌ | ❌ |
| 2.cjs has even | ❌ | 💥 | ✔️ | ✔️ | ✔️ |
| 2.cjs has default.even | ✔️ | 💥 | ✔️ | ✔️ | ❌ |
| 3.cjs has default | ✔️ | 💥 | ✔️ | ✔️ | ❌ |
| 3.cjs has unreachable | ✔️ | 💥 | ❌ | ❌ | ❌ |
| 3.cjs has even | ❌ | 💥 | ✔️ | ✔️ | ✔️ |
| 3.cjs has default.even | ✔️ | 💥 | ✔️ | ✔️ | ❌ |
| 4.cjs has default | ✔️ | 💥 | ✔️ | ✔️ | ❌ |
| 4.cjs has unreachable | ✔️ | 💥 | ❌ | ❌ | ❌ |
| 4.cjs has even | ✔️ | 💥 | ✔️ | ✔️ | ✔️ |
| 4.cjs has default.even | ✔️ | 💥 | ✔️ | ✔️ | ❌ |
| 5.cjs has default | ✔️ | 💥 | ✔️ | ✔️ | ❌ |
| 5.cjs has unreachable | ❌ | 💥 | ❌ | ❌ | ❌ |
| 5.cjs has even | ❌ | 💥 | ✔️ | ✔️ | ✔️ |
| 5.cjs has default.even | ✔️ | 💥 | ✔️ | ✔️ | ❌ |

# Cases

1.cjs
```js
module.exports = {
  even: n => n % 2 === 0
};

if (false) {
  module.exports.unreachable = 1;
}
```


2.cjs
```js
module.exports = {
  version: '1.1.0',
  even: n => n % 2 === 0
};

if (false) {
  module.exports.unreachable = 1;
}
```


3.cjs
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


4.cjs
```js
exports.__esModule = true;

exports.version = '1.1.0';
exports.even = n => n % 2 === 0;

if (false) {
  exports.unreachable = 1;
}
```


5.cjs
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

    
    

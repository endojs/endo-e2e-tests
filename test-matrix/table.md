# Import behavior matrix
What is available as a result of `import * as namespace from "x.cjs"`
| | 1.cjs:<br>default | 1.cjs:<br>no | 1.cjs:<br>even | 1.cjs:<br>default<br>.even |  2.cjs:<br>default | 2.cjs:<br>no | 2.cjs:<br>even | 2.cjs:<br>default<br>.even |  3.cjs:<br>default | 3.cjs:<br>no | 3.cjs:<br>even | 3.cjs:<br>default<br>.even |  4.cjs:<br>default | 4.cjs:<br>no | 4.cjs:<br>even | 4.cjs:<br>default<br>.even |  5.cjs:<br>default | 5.cjs:<br>no | 5.cjs:<br>even | 5.cjs:<br>default<br>.even
| --- | --- | --- | --- | --- |  --- | --- | --- | --- |  --- | --- | --- | --- |  --- | --- | --- | --- |  --- | --- | --- | ---
| node | ✔️ | ✔️ | ✔️ | ✔️ |   ✔️ | ✔️ | ❌ | ✔️ |   ✔️ | ✔️ | ❌ | ✔️ |   ✔️ | ✔️ | ✔️ | ✔️ |   ✔️ | ❌ | ❌ | ✔️
| endo | ✔️ | ✔️ | ✔️ | ✔️ |   ✔️ | ✔️ | ❌ | ✔️ |   ✔️ | ✔️ | ❌ | ✔️ |   ✔️ | ✔️ | ✔️ | ✔️ |   ✔️ | ❌ | ❌ | ✔️
| webpack | ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️
| rollup | ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️
| parcel | ❌ | ❌ | ✔️ | ❌ |   ❌ | ❌ | ✔️ | ❌ |   ❌ | ❌ | ✔️ | ❌ |   ❌ | ❌ | ✔️ | ❌ |   ❌ | ❌ | ✔️ | ❌
# Cases
1.cjs
```js
module.exports = {
  even: n => n % 2 === 0
};

if (false) {
  module.exports.no = 1;
}
```
2.cjs
```js
module.exports = {
  version: '1.1.0',
  even: n => n % 2 === 0
};

if (false) {
  module.exports.no = 1;
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
  module.exports.no = 1;
}
```
4.cjs
```js
exports.__esModule = true;

exports.version = '1.1.0';
exports.even = n => n % 2 === 0;

if (false) {
  exports.no = 1;
}
```
5.cjs
```js
const api = {
  version: '1.1.0',
  even: n => n % 2 === 0,
}
if (false) {
  api.no = 1;
}
module.exports = api
```

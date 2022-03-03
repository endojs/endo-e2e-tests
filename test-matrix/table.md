# Import behavior matrix
| | 1:<br>default | 1:<br>no | 1:<br>even | 1:<br>default<br>.even |  2:<br>default | 2:<br>no | 2:<br>even | 2:<br>default<br>.even |  3:<br>default | 3:<br>no | 3:<br>even | 3:<br>default<br>.even |  4:<br>default | 4:<br>no | 4:<br>even | 4:<br>default<br>.even |  5:<br>default | 5:<br>no | 5:<br>even | 5:<br>default<br>.even
| --- | --- | --- | --- | --- |  --- | --- | --- | --- |  --- | --- | --- | --- |  --- | --- | --- | --- |  --- | --- | --- | ---
| node | ✔️ | ✔️ | ✔️ | ✔️ |   ✔️ | ✔️ | ❌ | ✔️ |   ✔️ | ✔️ | ❌ | ✔️ |   ✔️ | ✔️ | ✔️ | ✔️ |   ✔️ | ❌ | ❌ | ✔️
| endo | ✔️ | ✔️ | ✔️ | ✔️ |   ✔️ | ✔️ | ❌ | ✔️ |   ✔️ | ✔️ | ❌ | ✔️ |   ✔️ | ✔️ | ✔️ | ✔️ |   ✔️ | ❌ | ❌ | ✔️
| webpack | ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️ |   ✔️ | ❌ | ✔️ | ✔️
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

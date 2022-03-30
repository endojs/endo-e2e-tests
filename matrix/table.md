

# Import behavior matrix

What is available as a result of `import * as namespace from "x.cjs"`

❌ - missing  
☑ - own property, but falsy  
✔️ - truthy  

|  | endo | node-v12.17 | node-v12.22 | node-v16 | esbuild | parcel | rollup | tsc | tscInterop | webpack |
|  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |
| [1.cjs](#file-1cjs) even | ✔️ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [1.cjs](#file-1cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [1.cjs](#file-1cjs) default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [2.cjs](#file-2cjs) even | ✔️ | ❌ | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [2.cjs](#file-2cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [2.cjs](#file-2cjs) default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [3.cjs](#file-3cjs) even | ❌ | ❌ | ❌ | ❌ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [3.cjs](#file-3cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [3.cjs](#file-3cjs) default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [4.cjs](#file-4cjs) even | ✔️ | ❌ | ❌ | ❌ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| [4.cjs](#file-4cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [4.cjs](#file-4cjs) default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [5.cjs](#file-5cjs) even | ✔️ | ❌ | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [5.cjs](#file-5cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [5.cjs](#file-5cjs) default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [6.cjs](#file-6cjs) even | ✔️ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ |
| [6.cjs](#file-6cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [6.cjs](#file-6cjs) default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [7.cjs](#file-7cjs) even | ☑ | ❌ | ☑ | ☑ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [7.cjs](#file-7cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ❌ | ❌ | ✔️ | ✔️ |
| [7.cjs](#file-7cjs) default.even | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [8.cjs](#file-8cjs) even | ✔️ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [8.cjs](#file-8cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [8.cjs](#file-8cjs) default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ☑ | ✔️ | ☑ | ✔️ | ✔️ |
| [9.cjs](#file-9cjs) even | ✔️ | ❌ | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [9.cjs](#file-9cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ | ✔️ |
| [9.cjs](#file-9cjs) default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ | ✔️ |
| [10.cjs](#file-10cjs) even | ✔️ | ❌ | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [10.cjs](#file-10cjs) default | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| [10.cjs](#file-10cjs) default.even | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |

# Cases

### file 1.cjs
```js
module.exports = {
  even: n => n % 2 === 0
};
```


### file 2.cjs
```js
module.exports = {
  version: '1.1.0',
  even: n => n % 2 === 0
};
```


### file 3.cjs
```js
let o = Object.create({ even: n => n % 2 === 0 })
module.exports = o;
```


### file 4.cjs
```js
Object.defineProperty(exports, 'even', {
  enumerable: false,
  value: n => n % 2 === 0
})
```


### file 5.cjs
```js
const api = {
  version: '1.1.0',
  even: n => n % 2 === 0,
}
module.exports = api
```


### file 6.cjs
```js
const even = n => n % 2 === 0;

// "The Infamous Triplet"
module.exports = even
module.exports.even = even
module.exports.default = even
```


### file 7.cjs
```js
if (false) {
    exports.even = true
}
```


### file 8.cjs
```js
const even = n => n % 2 === 0;

module.exports = {
    even,
    default: { even: false }
}
```


### file 9.cjs
```js
'use strict';
// derived from real package
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, '__esModule', { value: true });
const stuff = { even: n => n % 2 === 0 };
__exportStar(stuff, exports);
```


### file 10.cjs
```js
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
```




----

----

<style>
/* these are useful locally */
tr:nth-child(3n+1){
  border-top:2px solid #333 !important;
}
td:nth-child(n+6){
  background-color: #eee !important;
}
</style>
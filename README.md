# Endo E2E tests

A suite of e2e tests to track Endo's compatibility with the npm ecosystem.

## Run

First run

```
npm ci
npm run install-cases
```

It only needs to be installed once.

To execute tests, run:

```
npm test
```

### Testing local instance

To test your local Endo, open `test-imports/index.mjs` and switch the imports to your local path.

Example

```js
import '../../endo/packages/ses/index.js';
import { importLocation } from '../../endo/packages/compartment-mapper/index.js';
```

## Cases

Dependencies in `test-imports/package.json` are tested by default.  
Each dependency has test cases generated for it checking if it works in cjs and in esm contexts.

You can manually add test cases to `test-imports/cases` and all files there will run.

### Adding cases

Default test cases are generated by running

```
npm run install-cases --save-exact 'packagename'
npm run generate-cases
```

Existing files will not be overwritten.

### Test case format

Each file in `test-imports/cases` is used when you run tests.  
A test case must export `expected` and `actual` - these two will be passed to Ava's `deepEqual` assertion.
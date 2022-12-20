import 'ses';
import { importLocation, makeBundle } from '@endo/compartment-mapper';

// import '../../endo/packages/ses/index.js';
// import { importLocation, makeBundle } from '../../endo/packages/compartment-mapper/index.js';

import { scaffold } from './tools/scaffold.mjs';

const { testPackages } = scaffold({
  importLocation,
  makeBundle,
  strictMatchingExports: false,
});
testPackages({
  ext: 'mjs',
  // only: 'which.mjs',
});

import 'ses';
import { importLocation } from '@endo/compartment-mapper';

// import '../../endo/packages/ses/index.js';
// import { importLocation } from '../../endo/packages/compartment-mapper/index.js';

import { scaffold } from './tools/scaffold.mjs';

const { testPackages } = scaffold({
  importLocation,
  strictMatchingExports: false,
});
testPackages({
  ext: 'mjs',
  // only: 'which.mjs',
});

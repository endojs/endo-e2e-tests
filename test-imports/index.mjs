import 'ses';
import { importLocation } from '@endo/compartment-mapper';

import { scaffold } from './scaffold.mjs';

const { testPackages } = scaffold({
  importLocation,
  globals: { process: { env: {} } },
  modules: {
    builtin: true,
  },
});
testPackages();

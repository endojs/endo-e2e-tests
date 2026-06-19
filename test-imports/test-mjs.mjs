// import 'ses';
// import { importLocation } from '@endo/compartment-mapper';

import '../../endo/packages/ses/index.js';
import { importLocation } from '../../endo/packages/compartment-mapper/index.js';
import { parserForLanguageWithCjsBabel } from '../../endo/packages/compartment-mapper/import-parsers.js';
import {
  makeReadPowers,
  makeReadNowPowers,
} from '../../endo/packages/compartment-mapper/node-powers.js';
import fs from 'fs';
import path from 'path';
import url from 'url';
import crypto from 'crypto';

import { scaffold } from './tools/scaffold.mjs';

const { testPackages } = scaffold({
  readPowers: makeReadNowPowers({
    fs,
    crypto,
    path,
    url,
  }),
  DEFAULTS: {
    parserForLanguage: parserForLanguageWithCjsBabel
  },
  importLocation,
  strictMatchingExports: false,
});

testPackages({
  ext: 'mjs',
  // only: '_babel_types.mjs',
});

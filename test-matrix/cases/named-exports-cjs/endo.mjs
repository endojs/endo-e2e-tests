import 'ses';
import { importLocation } from '@endo/compartment-mapper';

import fs from 'fs';

function localUrl(path) {
  return new URL(path, import.meta.url).toString();
}

const read = async (location) =>
  fs.promises.readFile(new URL(location).pathname);

await importLocation(read, localUrl('./index.mjs'), {
  globals: { console: { log: console.log } },
  modules: {},
});

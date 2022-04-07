
import * as all from 'axios';
import def from 'axios';
export const name = 'axios';
export const expected = {"*":{"type":"object","keys":["default"]},"default":{"type":"function","keys":["Axios","Cancel","CancelToken","VERSION","all","create","default","defaults","delete","get","getUri","head","interceptors","isAxiosError","isCancel","options","patch","post","put","request","spread"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

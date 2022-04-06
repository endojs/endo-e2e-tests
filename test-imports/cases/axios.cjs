
const all = require('axios');
const def = all.default;
exports.expected = {"*":{"type":"function","keys":["Axios","Cancel","CancelToken","VERSION","all","create","default","defaults","delete","get","getUri","head","interceptors","isAxiosError","isCancel","options","patch","post","put","request","spread"]},"default":{"type":"function","keys":["Axios","Cancel","CancelToken","VERSION","all","create","default","defaults","delete","get","getUri","head","interceptors","isAxiosError","isCancel","options","patch","post","put","request","spread"]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

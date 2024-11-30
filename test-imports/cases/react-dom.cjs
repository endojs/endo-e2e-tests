
const all = require('react-dom');
let def;
exports.name = 'react-dom';
exports.expected = {"*":{"type":"object","keys":["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createPortal","createRoot","findDOMNode","flushSync","hydrate","hydrateRoot","render","unmountComponentAtNode","unstable_batchedUpdates","unstable_renderSubtreeIntoContainer","version"]},"default":{"type":"undefined","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

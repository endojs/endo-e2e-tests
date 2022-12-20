
import * as all from 'react-dom';
import def from 'react-dom';
export const name = 'react-dom';
export const expected = {"*":{"type":"object","keys":["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createPortal","createRoot","default","findDOMNode","flushSync","hydrate","hydrateRoot","render","unmountComponentAtNode","unstable_batchedUpdates","unstable_renderSubtreeIntoContainer","version"]},"default":{"type":"object","keys":["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createPortal","createRoot","findDOMNode","flushSync","hydrate","hydrateRoot","render","unmountComponentAtNode","unstable_batchedUpdates","unstable_renderSubtreeIntoContainer","version"]}};
export const actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};

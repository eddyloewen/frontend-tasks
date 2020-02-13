const path = require('path');
import es6 from './es6.js';
import es5 from './es5.js';

const js = (src, dest, options = { js: {}, es5: {}, es6: {} }) => {
    return () => {
        const bundlePromises = [
            es6(src, path.join(dest, 'module'), { ...options.js, ...options.es6 }),
            es5(src, path.join(dest, 'nomodule'), { ...options.js, ...options.es5 }),
        ];
        return Promise.all(bundlePromises);
    };
};
js.description = `compile scripts using rollup to generate es6 and es5 bundles`;

export default js;

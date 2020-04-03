const glob = require('glob-all');
import rollupJS from './rollupJS.js';

import environments from 'gulp-environments';

const isDev = environments.development;
const isProd = environments.production;

const js = (options = { babelOptions: {} }) => {
    return () => {
        return rollupJS(
            {
                input: glob.sync(options.src),
            },
            {
                dir: options.dest,
                entryFileNames: '[name].js',
                format: 'es',
                sourcemap: !!isDev(),
            },
            {
                babelrc: true,
                ...options.babelOptions,
            },
        );
    };
};

export default js;

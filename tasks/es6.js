const glob = require('glob-all');
import rollupJS from './rollupJS.js';

import environments from 'gulp-environments';

const isDev = environments.development;
const isProd = environments.production;

const es6 = (options = { babelOptions: {} }) => {
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
es6.description = `compile scripts using rollup with babel and code splitting`;

export default es6;

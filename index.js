import clean from './tasks/clean';
import copy from './tasks/copy';
import svg from './tasks/svg';

import css from './tasks/css';
import tailwind from './tasks/tailwind';
import postCSS from './tasks/postCSS';
import lintCSS from './tasks/lintCSS';
import watchCSS from './tasks/watchCSS';

import es6 from './tasks/es6';
import es5 from './tasks/es5';
import js from './tasks/js';
import lintJS from './tasks/lintJS';
import watchJS from './tasks/watchJS';

import Config from './config';

const options = (options = {}) => {
    Object.assign(Config, options);
};

const tasks = {
    clean,
    copy,
    svg,
    css,
    tailwind,
    postCSS,
    lintCSS,
    watchCSS,
    es6,
    es5,
    js,
    lintJS,
    watchJS,
};

export { tasks, options };

// API
// tasks.js(src, destination);
// tasks.css(src, destination);
// tasks.tailwind(src, destination);
// tasks.postCss(src, destination, [plugins]);
// tasks.browserSync(options);
// tasks.svg(icons, destination);
// tasks.copy(src, destination);
// tasks.options({
//     projectTitle: 'frontend-tasks',
//     showNotifications: true,
//     generateVersionManifest: false,
// });

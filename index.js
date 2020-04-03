import clean from './tasks/clean';
import copy from './tasks/copy';
import svg from './tasks/svg';

import css from './tasks/css';
import lintCSS from './tasks/lintCSS';

import js from './tasks/js';
import lintJS from './tasks/lintJS';
import watch from './tasks/watch';

import Config from './config';

const options = (options = {}) => {
    Object.assign(Config, options);
};

const tasks = {
    clean,
    copy,
    css,
    js,
    lintCSS,
    lintJS,
    svg,
    watch,
};

export { tasks, options };

// API
// tasks.js(src, destination);
// tasks.css(src, destination);
// tasks.browserSync(options);
// tasks.svg(icons, destination);
// tasks.copy(src, destination);
// tasks.options({
//     projectTitle: 'frontend-tasks',
//     showNotifications: true,
//     generateVersionManifest: false,
// });

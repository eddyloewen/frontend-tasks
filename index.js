import browserSync from './tasks/browserSync';
import clean from './tasks/clean';
import copy from './tasks/copy';
import css from './tasks/css';
import js from './tasks/js';
import lintCSS from './tasks/lintCSS';
import lintJS from './tasks/lintJS';
import run from './tasks/run';
import svg from './tasks/svg';
import watch from './tasks/watch';

import Config from './config';

const options = (options = {}) => {
    Object.assign(Config, options);
};

const tasks = {
    browserSync,
    clean,
    copy,
    css,
    js,
    lintCSS,
    lintJS,
    run,
    svg,
    watch,
};

export { tasks, options };

// API
// tasks.clean({ directories: [] });
// tasks.copy({ paths: [] });
// tasks.js({ src, destination });
// tasks.css({ src, destination });
// tasks.run({ cmd: 'ls', args: ['-la'] });
// tasks.svg({ paths: [] });
// tasks.browserSync({ files: [] });
// options({
//     projectTitle: 'frontend-tasks',
//     showNotifications: true,
//     generateVersionManifest: false,
// });

import gulp from 'gulp';
import notify from 'gulp-notify';

import Config from '../config';

const watchCSS = (options) => {
    return () => {
        gulp.watch(options.src, { ignoreInitial: false }, options.tasks).on('change', function () {
            if (Config.showNotifications) {
                notify({ title: Config.projectTitle, message: 'CSS changed' }).write('');
            }
        });
    };
};
watchCSS.description = `watch for style changes and lint then compile on change`;

export default watchCSS;

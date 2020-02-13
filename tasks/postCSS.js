import gulp from 'gulp';
import environments from 'gulp-environments';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import notify from 'gulp-notify';
import gulpIf from 'gulp-if';
import hash from '../.node/GulpHashPlugin';

const isDev = environments.development;
const isProd = environments.production;

import Config from '../config';

const postCSS = options => {
    return () => {
        return gulp
            .src(options.src)
            .pipe(
                plumber({
                    errorHandler: error => {
                        if (Config.showNotifications) {
                            notify.onError({
                                title: Config.projectTitle + ' - PostCSS Error',
                                message: error.toString(),
                            })(error);
                        }
                        this.emit('end');
                    },
                }),
            )
            .pipe(sourcemaps.init())
            .pipe(postcss(options.plugins))
            .pipe(isDev(sourcemaps.write('.')))
            .pipe(gulp.dest(options.dest))
            .pipe(gulpIf(Config.versionManifest !== false, hash(Config.versionManifest)));
    };
};
postCSS.description = `process styles with postcss`;

export default postCSS;

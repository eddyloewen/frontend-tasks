import gulp from 'gulp';
import eslint from 'gulp-eslint';

const lintJS = (options) => {
    return () => {
        return gulp
            .src(options.src)
            .pipe(
                eslint({
                    configFile: options.configFile || '.eslintrc',
                    useEslintrc: true,
                }),
            )
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    };
};
lintJS.description = `lint scripts using eslint`;

export default lintJS;

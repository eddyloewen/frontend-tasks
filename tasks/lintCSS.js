import gulp from 'gulp';
import stylelint from 'stylelint';
import postcss from 'gulp-postcss';

const lintCSS = src => {
    return () => {
        return gulp.src(src).pipe(postcss([stylelint]));
    };
};
lintCSS.description = `lint styles using stylelint`;

export default lintCSS;

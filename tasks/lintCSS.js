import gulp from 'gulp';
import stylelint from 'stylelint';
import postcss from 'gulp-postcss';

const lintCSS = (options) => {
	return () => {
		return gulp.src(options.src).pipe(postcss([stylelint]));
	};
};
lintCSS.description = `lint styles using stylelint`;

export default lintCSS;

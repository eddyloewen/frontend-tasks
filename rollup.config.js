const externals = [
	'gulp',
	'stylelint',
	'gulp-postcss',
	'gulp-flatten',
	'merge-stream',
	'gulp-plumber',
	'gulp-sourcemaps',
	'gulp-notify',
	'gulp-if',
	'gulp-environments',
	'gulp-eslint',
	'gulp-svg-sprite',
	'path',
	'through2',
	'rollup',
	'rollup-plugin-node-resolve',
	'rollup-plugin-babel',
	'rollup-plugin-terser',
	'rollup-plugin-cleanup',
	'rollup-plugin-postcss',
	'rollup-plugin-commonjs',
];

module.exports = [
	{
		input: 'index.js',
		external: externals,
		output: {
			interop: false,
			file: 'dist/cjs/index.js',
			format: 'cjs',
		},
	},
	{
		input: 'index.js',
		external: externals,
		output: {
			interop: false,
			file: 'dist/es/index.js',
			format: 'es',
		},
	},
];

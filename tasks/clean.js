import del from 'del';

const clean = (options) => {
	return () => {
		return del(options.directories);
	};
};
clean.description = `cleans the given directories`;

export default clean;

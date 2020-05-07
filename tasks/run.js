const spawn = require('child_process').spawn;
const log = require('fancy-log');

const run = (options) => {
	return (cb) => {
		const cmd = spawn(options.cmd, options.args, { stdio: 'inherit' });
		cmd.on('close', function (code) {
			log(options.cmd + ' exited with code ' + code);
			cb(code);
		});
		cmd.on('error', function (error) {
			log.error(options.cmd + ' errored with msg: ' + error);
			cb(error);
		});
	};
};

export default run;

import path from 'path';

import { defaultOptions, addToManifest } from './HashHelpers';

export default function hash(options = {}) {
	options = { ...defaultOptions, ...options };

	return {
		name: 'hash-version-manifest',
		renderChunk: function (code, chunk, outputOptions) {
			const filePath = options.formatter(outputOptions.dir.split(path.sep).join('/'));
			const fileName = `${filePath}${chunk.fileName}`;

			if (chunk.isEntry && !fileName.includes('.map')) {
				addToManifest(fileName, code, options);
			}
		},
	};
}

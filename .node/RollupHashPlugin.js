import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const defaultOptions = {
    name: 'hash-manifest.json',
    replace: false,
    versionPattern: '[name]?version=[hash]',
    publicPath: '',
};

function md5(string) {
    return crypto.createHash('md5').update(string).digest('hex');
}

function tryRequire(file) {
    try {
        return JSON.parse(fs.readFileSync(file, 'utf-8'));
    } catch (err) {
        if (err.code === 'ENOENT') return null;
        throw err;
    }
}

function mkdirpath(dest) {
    const dir = path.dirname(dest);
    try {
        fs.readdirSync(dir);
    } catch (err) {
        mkdirpath(dir);
        fs.mkdirSync(dir);
    }
}

function generateVersionString(versionPattern, name, hash) {
    return versionPattern.replace('[name]', name).replace('[hash]', hash);
}

function writeHash(bundleName, bundleDir, bundleCode, options) {
    // console.log('writeHash', bundleName, bundleDir);

    const fileName = `${bundleDir}/${bundleName}`.replace(options.publicPath, '');

    const manifest = tryRequire(options.name) || {};
    manifest[`${fileName}`] = generateVersionString(options.versionPattern, fileName, md5(bundleCode));
    mkdirpath(options.name);
    fs.writeFileSync(options.name, JSON.stringify(manifest, null, 4), 'utf8');
}

export default function hash(options = {}) {
    options = Object.assign({}, defaultOptions, options);

    return {
        name: 'hash-version-manifest',
        generateBundle: function (outputOptions, bundle) {
            // writeHash(
            //     bundle[Object.keys(bundle)[0]].fileName,
            //     outputOptions.dir,
            //     bundle[Object.keys(bundle)[0]].code,
            //     options,
            // );
        },
        renderChunk: function (code, chunk, outputOptions) {
            writeHash(chunk.fileName, outputOptions.dir, code, options);
        },
        writeBundle: function (bundle) {
            // console.log('writeBundle', bundle);
        },
    };
}

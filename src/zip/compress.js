import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

export const compress = async () => {
    const zip = createGzip();
    const file = createReadStream('./files/fileToCompress.txt');
    const archive = createWriteStream('./files/archive.gz');

    pipeline(
        file,
        zip,
        archive,
        (err) => err ? console.error(err) : null
    );
};

compress();
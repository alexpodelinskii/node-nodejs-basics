import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

export const decompress = async () => {
    const unZip = createUnzip();
    const archive = createReadStream('./files/archive.gz');
    const textFile = createWriteStream('./files/fileToCompress.txt');

    pipeline(
        archive,
        unZip,
        textFile,
        (err) => err ? console.error(err) : null
    );
};

decompress();
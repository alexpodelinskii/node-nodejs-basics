import { createWriteStream } from 'fs';

export const write = async () => {
    const stream = createWriteStream('./files/fileToWrite.txt');
    process.stdin
        .on('data', data => stream.write(data))
        .on('error', err => console.error(err.message));
};

write();
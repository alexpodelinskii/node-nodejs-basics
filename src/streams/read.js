import { createReadStream } from 'fs';

export const read = async () => {
    let text = '';
    createReadStream('./files/fileToRead.txt', 'utf-8')
        .on('data', chunk => text += chunk)
        .on('end', () => process.stdout.write(text))
        .on('error', err => console.error(err.message));
};

read();
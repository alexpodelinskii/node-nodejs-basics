import fs from 'fs/promises'

export const read = async () => {
    fs.readFile('./files/fileToRead.txt', 'utf8')
        .then((buffer) => {
            console.log(buffer);
        })
        .catch(() => {
            throw new Error('FS operation failed');
        })
};

read();
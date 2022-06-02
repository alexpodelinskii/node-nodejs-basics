import fs from 'fs/promises'

export const list = async () => {
    fs.readdir('./files')
        .then((files) => {
            files.forEach((file) => {
                console.log(file);
            })
        })
        .catch(() => {
            throw new Error('FS operation failed');
        })
};

list()
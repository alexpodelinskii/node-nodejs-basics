import { URL } from 'url';
import fs from 'fs/promises'
import { resolve } from 'path';


export const copy = async () => {

    fs.readdir('files')
        .then((files) => {
            fs.mkdir('files_copy')
                .then(() => {
                    files.forEach((file) => {
                        const path = (new URL(`./files/${file}`, import.meta.url).pathname).slice(1);
                        const newpath = (new URL(`./files_copy/${file}`, import.meta.url).pathname).slice(1);
                        fs.copyFile(path, newpath);
                    })
                })
                .then(() => {
                    console.log('Files copied successfully');
                })
                .catch(() => {
                    throw new Error('FS operation failed')
                })
        })
        .catch(() => {
            throw new Error('FS operation failed')
        })
};

copy()
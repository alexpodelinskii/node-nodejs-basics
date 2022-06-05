import { URL } from 'url';
import fs from 'fs/promises'

export const create = async () => {
    fs.writeFile('./files/fresh.txt', 'I am fresh and young')
        .then(() => {
            console.log('The file was created successfully');
        })
        .catch(() => {
            throw new Error('FS operation failed');
        })
};
create();
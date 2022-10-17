import fs from 'fs/promises';
import path from 'path';
import getDirname from '../dirname.js';

const __dirname = await getDirname(import.meta.url);
const pathToFile = path.join(__dirname, 'files', `fileToRead.txt`);

console.log(pathToFile);
export const read = async () => {
    try {
        let text = await fs.readFile(pathToFile, 'utf8');
        console.log(text);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};
read()
import fs from 'fs';
import getDirname from '../dirname.js';
import path from 'path';


export const rename = async () => {
    const __dirname = await getDirname(import.meta.url);

    const pathToWrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const pathToCorrectFile = path.join(__dirname, 'files', 'properFilename.txt');

    try {
        await fs.promises.access(pathToWrongFile);
        fs.access(pathToCorrectFile, (err) => {
            if (err) {
                fs.promises.rename(pathToWrongFile, pathToCorrectFile)
            } else {
                throw new Error('FS operation failed')
            }
        });

    } catch {
        throw new Error('FS operation failed')
    }

}; rename();
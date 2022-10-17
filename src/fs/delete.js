import fs from 'fs/promises';
import getDirname from '../dirname.js';
import path from 'path';

export const remove = async () => {


    const __dirname = await getDirname(import.meta.url);
    const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt')
    try {
        await fs.access(pathToFile)
        await fs.unlink(pathToFile);
    } catch {
        throw new Error('FS operation failed')
    }
};

remove()
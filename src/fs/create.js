import fs from 'fs';
import path from 'path';
import getDirname from './../dirname.js';
import { F_OK } from 'constants'

const __dirname = await getDirname(import.meta.url);

const pathToFile = path.join(__dirname, 'files/fresh.txt');
const text = `I am fresh and young`;



export const create = async () => {
    fs.access(pathToFile, F_OK, (err) => {
        if (err) {
            fs.writeFile(pathToFile, text, (err) => {
                console.log(err);
                if (err) throw new Error('FS operation write failed');
            })
        } else {
            throw new Error('FS operation  failed');
        }
    })

}


create()
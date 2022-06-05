import fs from 'fs/promises'

export const rename = async () => {
    fs.readFile('./files/properFilename.md')
        .then(() => {
            throw new Error('FS operation failed');
        })
        .catch(() => {
            fs.rename('./files/wrongFilename.txt', './files/properFilename.md')
                .then(() => {
                    console.log('File rensmed successfully');
                })
                .catch(() => {
                    throw new Error('FS operation failed');
                })
        })

};
rename();
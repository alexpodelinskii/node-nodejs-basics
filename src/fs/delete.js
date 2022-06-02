import fs from 'fs/promises'

export const remove = async () => {
    fs.unlink('./files/fileToRemove.txt')
        .then(() => {
            console.log('File deleted successfully');
        })
        .catch(() => {
            throw new Error('FS operation failed');
        })
};
remove();
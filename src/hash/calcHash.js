import crypto from "crypto";
import fs from "fs/promises";

export const calculateHash = async () => {
    try {
        const buffer = await fs.readFile('./files/fileToCalculateHashFor.txt');
        const hash = crypto.createHash('SHA256');
        const fileHash = hash.update(buffer).digest('hex');
        console.log(fileHash);
    } catch (err) {
        throw new Error('Ups...')
    }
};

calculateHash();
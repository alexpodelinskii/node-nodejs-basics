import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
const random = Math.random();


let file = (random > 0.5) ? 'a' : 'b';
const unknownObject = JSON.parse(
    await readFile(
        new URL(
            `./files/${file}.json`,
            import.meta.url
        )
    )
);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};


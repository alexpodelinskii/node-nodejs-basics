import { dirname } from 'path';
import { fileURLToPath } from 'url';

const getDirname = async (url) => {
    return dirname(fileURLToPath(url))
}

export default getDirname;
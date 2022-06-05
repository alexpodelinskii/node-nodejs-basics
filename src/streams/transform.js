import { Transform, pipeline } from "stream";

export const transform = async () => {
    const { stdin, stdout } = process;
    pipeline(
        stdin,
        new Transform({
            transform(chunk, encoding, callback) {
                callback(
                    null,
                    chunk.reverse() + '\n');
            },
        }),
        stdout,
        (err) => {
            if (err) {
                console.error(err)
            } else return null
        }
    );
};

transform();
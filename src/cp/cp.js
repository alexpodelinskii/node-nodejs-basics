import { spawn } from 'child_process'

export const spawnChildProcess = async () => {
    const args = process.argv.slice(2);

    const cp = spawn('node ', ['./files/script.js', ...args], { shell: true });

    cp.stdout.on('data', data => {
        console.log(data.toString().trim());
    });
    process.stdin.on('data', data => {
        cp.stdin.write(data);
    });
    cp.on('close', () => {
        process.exit();
    });

};

spawnChildProcess()
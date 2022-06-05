import os from 'os';
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
    const resultsArr = [];
    const cpusCount = os.cpus().length;
    const promises = [];

    for (let i = 0; i < cpusCount; i++) {
        promises.push(worker(i))
    }
    await Promise.all(promises).then(results => results.forEach(res => resultsArr.push(res)));
    return resultsArr;
};

const worker = (index) => new Promise((resolve) => {
    const worker = new Worker('./worker.js', { workerData: 10 + index });

    worker.on('message', msg => {
        resolve({ status: 'resolve', data: msg });
    });

    worker.on('error', err => {
        resolve({ status: 'error', data: null });
    });

});

console.log(await performCalculations());
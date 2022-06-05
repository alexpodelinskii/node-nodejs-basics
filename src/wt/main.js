import os from 'os';
import { EventEmitter } from 'events';
import { Worker } from 'worker_threads';
import path from 'path';

export const performCalculations = async () => {
    const workers = new Thread('./worker.js');
    workers.run(10);
    workers.on('completed', data => console.log(data));
};

class Thread extends EventEmitter {
    workers = [];
    resultsArr = [];

    constructor(file) {
        super();
        this.file = file;
        this.start(os.cpus().length);
    }

    start(countTreads) {
        for (let i = 0; i < countTreads; i++) {
            const worker = new Worker(path.resolve(this.file));
            worker.on('message', data => this.addResult(i, 'resolved', data));
            worker.on('error', () => this.addResult(i, 'error', null));
            this.workers.push(worker);
        }
    }

    run(startNumber) {
        this.workers.forEach((worker, i) => worker.postMessage(startNumber + i));
        return this;
    }

    addResult(number, status = 'resolved', data) {
        this.resultsArr.push({ status, data });

        if (this.resultsArr.length === this.workers.length) {
            const result = this.resultsArr
                .sort((a, b) => a.data - b.data);
            this.emit('completed', result);
            this.abortWorkers();
        }
    }

    abortWorkers() {
        this.workers.forEach(worker => worker.terminate());
    }
}



performCalculations();
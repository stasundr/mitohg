'use strict';

const
    async = require('async'),
    redis = require('./redis');

let queue = async.queue((file, callback) => {
    const extension = file.label.toLowerCase().match(/\.?\w+$/)[0];

    switch(extension) {
        default:
            file.status = 'unsupported file';
            callback(file);
            break;
    }
});

let worker = {
    updateTask: (file) => {
        return new Promise((fulfill, reject) => {
            redis.set(file.id, JSON.stringify(file), err => {
                if (err) reject(err);
                else fulfill(file)
            })
        });
    },

    addTask: (file) => {
        worker
            .updateTask(file)
            .then(file => queue.push(file, worker.endTask));
    },

    endTask: (file) => {
        console.log(`INFO ${file.id} status: ${file.status}`);
        worker.updateTask(file);
    },

    getTask: (file_id) => {
        return new Promise((fulfill, reject) => {
            redis.get(file_id, (err, data) => {
                if (err) reject(err);
                else fulfill(JSON.parse(data))
            })
        });
    }
};

module.exports = worker;
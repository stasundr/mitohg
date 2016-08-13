'use strict';

let queue = require('./task_queue');

const
       express = require('express'),
    bodyParser = require('body-parser'),
        multer = require('multer');

const
    router = express.Router(),
    upload = multer({ dest: 'uploads' });

// File upload
router.post('/file', upload.any(), (req, res) => {
    const files = req.files.map(file => {
        return {
                id: file.filename,
             label: file.originalname,
            status: 'pending'
        }
    });

    files.forEach(queue.addTask);

    res.json({ files, upload: true });
});

// Get file status
router.get('/file/:id', (req, res) => {
    queue
        .getTask(req.params.id)
        .then(task => res.json(task));
});

//
router.post('/status', bodyParser.json(), (req, res) => {
    console.log(req.body);

    const ids = req.body;

    queue
        .getMultipleTasks(ids)
        .then(task => res.json(task));
});

module.exports = router;
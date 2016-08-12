'use strict';

const
    express = require('express'),
     multer = require('multer');

const
    router = express.Router(),
    upload = multer({ dest: 'uploads' });

// File upload
router.post('/file-upload', upload.any(), (req, res) => {
    const files = req.files.map(file => {
        return {
                id: file.filename,
             label: file.originalname,
            status: 'pending'
        }
    });

    res.json({ files, upload: true });
});

module.exports = router;
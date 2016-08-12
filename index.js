'use strict';

const
     express = require('express'),
      logger = require('morgan'),

    { port } = require('./config'),
         api = require('./modules/api');

const
    greetings = () => console.log(`Server is listening on port ${port}`),
       server = express();

server
    .use(logger('dev'))
    .use(express.static('public'))
    .use('/api/v1', api)
    .get('/', (req, res) => res.render('index'))
    .listen(port, greetings);
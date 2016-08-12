'use strict';

let redis = require('redis');
let {port, host, auth} = require('../config').redis;

let client = redis.createClient(port, host);

if (auth) client.auth(auth);

client.on('error', err => { throw err });

module.exports = client;
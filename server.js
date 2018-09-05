'use strict'

const express = require('express');
const cors = require('cors');


const config = require('./config');
const routes = require('./App/routes');

let app = express()

app.set('port', config.port);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.options('*', cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
});

app.use('/', routes);

module.exports = app
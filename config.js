'use strict'

const path = require('path');

const rootPath = path.resolve(__dirname, '.');
const port = process.env.PORT || 8080;

module.exports = {
  rootPath,
  port
}
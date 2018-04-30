const merge = require('webpack-merge');
const server = require('../server');
const prod = require('../prod.js');

module.exports = merge(server, prod);

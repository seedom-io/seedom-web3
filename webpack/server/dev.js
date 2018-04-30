const merge = require('webpack-merge');
const server = require('../server.js');
const dev = require('../dev.js');

module.exports = merge(server, dev);

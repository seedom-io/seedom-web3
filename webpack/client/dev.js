const merge = require('webpack-merge');
const client = require('../client');
const dev = require('../dev.js');

module.exports = merge(client, dev);

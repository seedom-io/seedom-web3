const merge = require('webpack-merge');
const client = require('../client');
const prod = require('../prod.js');

module.exports = merge(client, prod);

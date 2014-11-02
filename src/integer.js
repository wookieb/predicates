'use strict';

/**
 * Checks whether a value is an integer
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = require('./integer/native') || require('./integer/polyfill');

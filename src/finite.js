'use strict';

/**
 * Checks whether a value is a number and it's finite
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = require('./finite/native') || require('../finite/polyfill');

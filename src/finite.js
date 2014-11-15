'use strict';

/**
 * Checks whether a value is a number and it's finite
 *
 * @function finite
 *
 * @example
 * var is = require('predicates');
 *
 * is.finite(1); // false
 * is.finite(Infinity); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = require('./finite/native') || require('./finite/polyfill');

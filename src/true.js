'use strict';

var isBoolean = require('./boolean');
/**
 * Checks whether a value is a boolean true
 *
 * @function true
 *
 * @example
 * var is = require('predicates');
 *
 * is.true(true); // true
 * is.true('true'); // false
 *
 * @param {Boolean} value
 * @returns {Boolean}
 */
module.exports = function(value) {
    return value === true || (isBoolean(value) && value == true);
};
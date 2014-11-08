'use strict';

var isNumber = require('./number');

/**
 * Checks whether a value is a negative number
 *
 * @function negative
 *
 * @example
 * var is = require('predicates');
 *
 * is.negative(-1); // true
 * is.negative(0); // false
 *
 * @param {Number} value
 * @returns {Boolean}
 */
module.exports = function negative(value) {
    return isNumber(value) && value < 0;
};

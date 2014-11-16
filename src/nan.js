'use strict';

var isNumber = require('./number');
/**
 * Checks whether a value is a NaN number
 *
 * **Aliases** _nan_
 * @function NaN
 *
 * @example
 * var is = require('predicates');
 *
 * is.NaN(NaN); // true
 * is.NaN(10); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isNotANumber(value) {
    return isNumber(value) && isNaN(value);
};
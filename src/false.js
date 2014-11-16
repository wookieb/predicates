/*eslint eqeqeq: 0*/
'use strict';

var isBoolean = require('./boolean');
/**
 * Checks whether a value is false a boolean false
 *
 * @function false
 *
 * @example
 * var is = require('predicates');
 *
 * is.false(false); // true
 * is.false(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 * @name false
 */
module.exports = function isFalse(value) {
    return value === false || (isBoolean(value) && value == false);
};

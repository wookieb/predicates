'use strict';

/**
 * Checks whether a value is a number
 *
 * **Aliases** _num_
 *
 * @function number
 *
 * @example
 * var is = require('predicates');
 *
 * is.number(10); // true
 * is.number('10'); // false
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]';
};

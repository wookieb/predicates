'use strict';

/**
 * Checks whether a value is a function
 *
 * **Aliases** _str_
 *
 * @function string
 *
 * @example
 * var is = require('predicates');
 *
 * is.string('test'); // true
 * is.string({}); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function string(value) {
    return Object.prototype.toString.call(value) === '[object String]';
};

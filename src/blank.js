'use strict';

var isString = require('./string');

/**
 * Checks whether a value is empty string or contains only whitespaces
 *
 * @function blank
 *
 * @example
 * var is = require('predicates');
 *
 * is.blank(''); // true
 * is.blank('    '); // true
 * is.blank('test'); // false
 *
 * @param {String} value
 * @returns {Boolean}
 */
module.exports = function isBlank(value) {
    return isString(value) && String.prototype.trim.call(value) === '';
};

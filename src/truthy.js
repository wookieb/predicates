'use strict';

/**
 * Checks whether a value is truthy
 *
 * @function truthy
 *
 * @example
 * var is = require('predicates');
 *
 * is.truthy(true); // true
 * is.truthy(1); // true
 * is.truthy(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isTruthy(value) {
    return !!value;
};

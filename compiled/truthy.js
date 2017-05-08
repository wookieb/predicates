"use strict";
/**
 * Checks whether a value is truthy
 *
 * @example
 * var is = require('predicates');
 *
 * is.truthy(true); // true
 * is.truthy(1); // true
 * is.truthy(0); // false
 */
function isTruthy(value) {
    return !!value;
}
module.exports = isTruthy;

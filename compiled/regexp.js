"use strict";
/**
 * Checks whether a value is a regexp
 *
 * @example
 * var is = require('predicates');
 *
 * is.regExp(/t/); // true
 * is.regExp(new RegExp(/t/)); // true
 * is.regExp('.*'); // false
 */
function isRegexp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}
module.exports = isRegexp;

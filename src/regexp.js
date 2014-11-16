'use strict';

/**
 * Checks whether a value is a regexp
 *
 * **Aliases** _regexp_
 *
 * @function regExp
 *
 * @example
 * var is = require('predicates');
 *
 * is.regExp(/t/); // true
 * is.regExp(new RegExp(/t/)); // true
 * is.regExp('.*'); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isRegexp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
};

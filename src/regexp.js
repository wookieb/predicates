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
 * is.regexp('.*'); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function regexp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
};

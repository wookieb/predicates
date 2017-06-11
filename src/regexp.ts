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
function isRegexp(value: any): boolean {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}

export default isRegexp;
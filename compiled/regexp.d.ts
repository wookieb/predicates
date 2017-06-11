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
declare function isRegexp(value: any): boolean;
export default isRegexp;

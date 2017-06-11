/**
 * Checks whether a value is undefined
 *
 * @example
 * var is = require('predicates');
 *
 * is.undefined(undefined); // true
 * is.undefined(0); // false
 */
declare function isUndefined(value: any): boolean;
export default isUndefined;

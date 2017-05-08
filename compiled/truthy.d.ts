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
declare function isTruthy(value: any): boolean;
export = isTruthy;

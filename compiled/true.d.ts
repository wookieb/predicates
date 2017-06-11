/**
 * Checks whether a value is a boolean true
 *
 * @example
 * var is = require('predicates');
 *
 * is.true(true); // true
 * is.true('true'); // false
 */
declare function isTrue(value: any): boolean;
export default isTrue;

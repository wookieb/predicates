/**
 * Checks whether a value is a function
 *
 * @example
 * var is = require('predicates');
 *
 * is.string('test'); // true
 * is.string({}); // false
 */
declare function isString(value: any): boolean;
export = isString;

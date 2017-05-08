/**
 * Checks whether a value is a boolean
 *
 * **Aliases** _bool_
 *
 * @function boolean
 *
 * @example
 * var is = require('predicates');
 *
 * is.boolean(true); // true
 * is.boolean(false);; // true
 * is.boolean(0); // false
 *
 * @param value
 */
declare function isBoolean(value: any): boolean;
export = isBoolean;

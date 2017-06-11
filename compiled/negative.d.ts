/**
 * Checks whether a value is a negative number
 *
 * @function negative
 *
 * @example
 * var is = require('predicates');
 *
 * is.negative(-1); // true
 * is.negative(0); // false
 *
 * @param {number} value
 * @returns {boolean}
 */
declare function isNegativeNumber(value: any): boolean;
export default isNegativeNumber;

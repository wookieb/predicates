/**
 * Checks whether a value is a positive number
 *
 * @function positive
 *
 * @example
 * var is = require('predicates');
 *
 * is.positive(10); // true
 * is.positive(-1); // false
 *
 * @param {Number} value
 * @returns {Boolean}
 */
declare function isPositiveNumber(value: number): boolean;
export = isPositiveNumber;

/**
 * Checks whether a value is a NaN number
 *
 * **Aliases** _nan_
 * @function NaN
 *
 * @example
 * var is = require('predicates');
 *
 * is.NaN(NaN); // true
 * is.NaN(10); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
declare function isNotANumber(value: any): boolean;
export = isNotANumber;

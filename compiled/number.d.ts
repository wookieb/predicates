/**
 * Checks whether a value is a number
 *
 * **Aliases** _num_
 *
 * @function number
 *
 * @example
 * var is = require('predicates');
 *
 * is.number(10); // true
 * is.number('10'); // false
 * @param {*} value
 * @returns {boolean}
 */
declare function isNumber(value: any): boolean;
export default isNumber;

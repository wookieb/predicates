import isNumber from './number';

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
function isNegativeNumber(value: any): boolean {
    return isNumber(value) && value < 0;
}

export default isNegativeNumber;

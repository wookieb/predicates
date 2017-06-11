
import isNumber from './number';

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
function isNotANumber(value: any): boolean {
    return isNumber(value) && isNaN(value);
}

export default isNotANumber;
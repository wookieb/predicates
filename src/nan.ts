import isNumber from './number';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a NaN number
 *
 * **Type guard:** value is number
 *
 * @example
 * is.NaN(NaN); // true
 * is.NaN(10); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isNotANumber(value: any): value is number {
    return isNumber(value) && isNaN(value);
}

setDescription(isNotANumber, 'not a number');
export default isNotANumber;
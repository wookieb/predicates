import isNumber from './number';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a negative number
 *
 * **Type guard:** value is number
 *
 * @example
 * is.negative(-1); // true
 * is.negative(0); // false
 *
 * @param {number} value
 * @returns {boolean}
 */
function isNegativeNumber(value: any): value is number {
    return isNumber(value) && value < 0;
}

setDescription(isNegativeNumber, 'a negative number');
export default isNegativeNumber;

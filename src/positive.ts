import isNumber from './number';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a positive number
 *
 * **Type guard:** value is number
 *
 * @example
 * is.positive(10); // true
 * is.positive(-1); // false
 *
 * @param {Number} value
 * @returns {boolean}
 */
function isPositiveNumber(value: number): value is number {
    return isNumber(value) && value > 0;
}

setDescription(isPositiveNumber, 'a positive number');
export default isPositiveNumber;
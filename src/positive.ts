import isNumber from './number';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a positive number
 *
 * @example
 * is.positive(10); // true
 * is.positive(-1); // false
 */
function isPositiveNumber(value: number): value is number {
    return isNumber(value) && value > 0;
}

setDescription(isPositiveNumber, 'a positive number');
export default isPositiveNumber;
import isNumber from './number';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a negative number
 *
 * @example
 * is.negative(-1); // true
 * is.negative(0); // false
 */
function isNegativeNumber(value: any): boolean {
    return isNumber(value) && value < 0;
}

setDescription(isNegativeNumber, 'a negative number');
export default isNegativeNumber;

import isNumber from './number';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a NaN number
 *
 * @example
 * is.NaN(NaN); // true
 * is.NaN(10); // false
 */
function isNotANumber(value: any): boolean {
    return isNumber(value) && isNaN(value);
}

setDescription(isNotANumber, 'not a number');
export default isNotANumber;
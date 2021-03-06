import isBoolean from './boolean';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is false a boolean false
 *
 * @example
 * is.false(false); // true
 * is.false(0); // false
 */
function isFalse(value: boolean): value is boolean {
    return value === false || (isBoolean(value) && value.valueOf() === false);
}

setDescription(isFalse, 'false');
export default isFalse;

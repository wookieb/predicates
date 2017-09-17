import isBoolean from './boolean';
import {setDescription} from "./utils/description";

/**
 * Checks whether a value is a boolean true
 *
 * @example
 * is.true(true); // true
 * is.true('true'); // false
 */
function isTrue(value: any): value is boolean {
    return value === true || (isBoolean(value) && value == true);
}

setDescription(isTrue, 'true');
export default isTrue;
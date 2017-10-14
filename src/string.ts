
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a string
 *
 * @example
 * is.string('test'); // true
 * is.string({}); // false
 */
function isString(value: any): value is string {
    return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
}

setDescription(isString, 'a string');
export default isString;

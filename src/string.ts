
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a string
 *
 * **Type guard:** value is string
 *
 * @example
 * is.string('test'); // true
 * is.string({}); // false
 *
 * @param {*} value
 * @returns {bool}
 */
function isString(value: any): value is string {
    return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
}

setDescription(isString, 'a string');
export default isString;

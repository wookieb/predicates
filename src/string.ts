/**
 * Checks whether a value is a function
 *
 * @example
 * is.string('test'); // true
 * is.string({}); // false
 */
import {setDescription} from "./utils/description";

function isString(value: any): value is string {
    return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
}

setDescription(isString, 'a string');
export default isString;

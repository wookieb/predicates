/**
 * Checks whether a value is a regexp
 *
 * **Type guard:** value is RegExp
 *
 * @example
 * is.regExp(/t/); // true
 * is.regExp(new RegExp(/t/)); // true
 * is.regExp('.*'); // false
 *
 * @param {*} value
 * @returns {bool}
 */
import {setDescription} from './utils/description';

function isRegexp(value: any): value is RegExp {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}

setDescription(isRegexp, 'a RegExp');
export default isRegexp;
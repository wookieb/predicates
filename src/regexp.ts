/**
 * Checks whether a value is a regexp
 *
 * @example
 * is.regExp(/t/); // true
 * is.regExp(new RegExp(/t/)); // true
 * is.regExp('.*'); // false
 */
import {setDescription} from './utils/description';

function isRegexp(value: any): boolean {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}

setDescription(isRegexp, 'a RegExp');
export default isRegexp;
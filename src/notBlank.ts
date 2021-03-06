import isString from './string';
import {setDescription} from './utils/description';

const CONTAINS_AT_LEAST_ONE_NON_WHITESPACE = /\S/;

/**
 * Checks whether a value is a string and contains at least one non-whitespace character
 *
 * @example
 * is.notBlank(''); // false
 * is.notBlank('    '); // false
 * is.notBlank('test'); // true
 * is.notBlank({toString: function() { return 'test'; }}); // false - since values are not converted to strings
 */
function notBlank(value: any): boolean {
    return isString(value) && CONTAINS_AT_LEAST_ONE_NON_WHITESPACE.test(value);
}

setDescription(notBlank, 'not blank string');
export default notBlank;
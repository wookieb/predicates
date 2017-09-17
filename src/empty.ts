import isObject from './object';
import isString from './string';
import isArrayLike from './arrayLike';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is empty
 * Value is empty when:
 * * is an array like object with length === 0
 * * is an object without enumerable properties
 * * is an empty string
 *
 * @example
 * is.empty(''); // true
 * is.empty([]); // true
 * is.empty({}); // true
 * is.empty([1]); // false
 * is.empty('test'); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isEmpty(value: any): boolean {
    if (isArrayLike(value)) {
        return value.length === 0;
    } else if (isObject(value)) {
        return Object.keys(value).length === 0;
    } else if (isString(value)) {
        return value == '';
    }
    return value === void 0;
}

setDescription(isEmpty, 'an empty value');
export default isEmpty;

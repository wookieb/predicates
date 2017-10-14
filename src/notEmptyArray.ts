import isArray from './array';
import {setDescription} from './utils/description';

/**
 * Checks whether value is an array and is not empty
 *
 * @example
 * is.notEmptyArray([1]); // true
 * is.notEmptyArray([]); // false
 * is.notEmptyArray('string'); // false
 */
export default function notEmptyArray<T = any>(value: any): value is Array<T> {
    return isArray(value) && value.length > 0;
}

setDescription(notEmptyArray, 'not an empty array');
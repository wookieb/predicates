import isArray from './array';
import {setDescription} from './utils/description';

/**
 * Checks whether value is an empty array
 *
 * @example
 * is.emptyArray([]); // true
 * is.emptyArray([1]); // false
 * is.emptyArray(''); // false
 */
export default function isEmptyArray<T = any>(value: any): boolean {
    return isArray(value) && value.length === 0;
}

setDescription(isEmptyArray, 'an empty array');
import isArray from './array';
import {setDescription} from "./utils/description";

/**
 * Checks whether value is an empty array
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isEmptyArray<T = any>(value: any): value is Array<T> {
    return isArray(value) && value.length === 0;
}

setDescription(isEmptyArray, 'an empty array');
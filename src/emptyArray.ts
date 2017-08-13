import isArray from './array';
import {setDescription} from "./utils/description";

/**
 * Checks whether value is an empty array
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isEmptyArray(value: any): boolean {
    return isArray(value) && value.length === 0;
}

setDescription(isEmptyArray, 'an empty array');
import isArray from './array';
import {setDescription} from "./utils/description";

/**
 * Checks whether value is an array and is not empty
 *
 * @param {*} value
 * @return {boolean}
 */
export default function notEmptyArray(value: any): boolean {
    return isArray(value) && value.length > 0;
}

setDescription(notEmptyArray, 'not an empty array');
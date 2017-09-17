/**
 * Checks whether a value is an array
 *
 * @example
 * is.array([]); // true
 * is.array({}); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from './utils/description';

const isArray: <T = any>(value: any) => value is Array<T> = setDescription(Array.isArray, 'an array');

export default isArray;
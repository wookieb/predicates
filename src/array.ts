import {setDescription} from './utils/description';

/**
 * Checks whether a value is an array
 *
 * **Type guard:** value is Array<T = any>
 * @example
 * is.array([]); // true
 * is.array({}); // false
 * is.array('string'); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
const isArray: <T = any>(value: any) => value is Array<T> = setDescription(Array.isArray, 'an array');

export default isArray;
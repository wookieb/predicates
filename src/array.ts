import {setDescription} from './utils/description';

/**
 * Checks whether a value is an array
 *
 * @example
 * is.array([]); // true
 * is.array({}); // false
 * is.array('string'); // false
 */
const isArray: <T = any>(value: any) => value is Array<T> = setDescription(Array.isArray, 'an array');

export default isArray;
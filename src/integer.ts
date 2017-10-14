import native from './integer/native';
import polyfill from './integer/polyfill';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is an integer
 *
 * @example
 * is.integer(10); // true
 * is.integer(10.4); // false
 */
const isInteger: (value: any) => value is number = native || polyfill;
setDescription(isInteger, 'an integer');

export default isInteger;

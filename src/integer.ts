import native from './integer/native';
import polyfill from './integer/polyfill';
import {setDescription} from "./utils/description";

/**
 * Checks whether a value is an integer
 *
 * @function integer
 * @function int
 *
 * @example
 * var is = require('predicates');
 *
 * is.integer(10); // true
 * is.integer(10.4); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
const isInteger = native || polyfill;
setDescription(isInteger, 'an integer');
export default isInteger;

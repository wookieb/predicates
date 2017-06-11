import native from './integer/native';
import polyfill from './integer/polyfill';

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
export default native || polyfill;

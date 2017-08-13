/**
 * Checks whether a value is an array
 *
 * **Aliases** _arr_
 *
 * @function array
 *
 * @example
 * var is = require('predicates');
 *
 * is.array([]); // true
 * is.array({}); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from "./utils/description";

export default setDescription(Array.isArray, 'an array');
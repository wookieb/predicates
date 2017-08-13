import isString from './string';
import {setDescription} from "./utils/description";

const CONTAINS_ONLY_WHITESPACES = /^\s*$/;

/**
 * Checks whether a value is empty string or contains only whitespaces
 *
 * @function blank
 *
 * @example
 * var is = require('predicates');
 *
 * is.blank(''); // true
 * is.blank('    '); // true
 * is.blank('test'); // false
 *
 * @param {string} value
 * @returns {boolean}
 */
export default function isBlank(value: any): boolean {
    return isString(value) && (value === '' || CONTAINS_ONLY_WHITESPACES.test(value));
}

setDescription(isBlank, 'a blank string');
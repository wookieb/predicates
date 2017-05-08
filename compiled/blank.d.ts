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
declare function isBlank(value: any): boolean;
export = isBlank;

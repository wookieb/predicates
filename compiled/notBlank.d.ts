/**
 * Checks whether a value is a string and contains at least one non-whitespace character
 *
 * @function notBlank
 *
 * @example
 * var is = require('predicates');
 *
 * is.notBlank(''); // false
 * is.notBlank('    '); // false
 * is.notBlank('test'); // true
 * is.notBlank({toString: function() { return 'test'; }}); // false - since it's not a string
 *
 * @param {string} value
 * @returns {boolean}
 */
declare function notBlank(value: any): boolean;
export = notBlank;

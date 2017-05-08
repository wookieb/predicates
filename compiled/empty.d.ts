/**
 * Checks whether a value is empty
 * Value is empty when:
 * * is an array like object with length === 0
 * * is an object without enumerable properties
 * * is an empty string
 *
 * @function empty
 *
 * @example
 * var is = require('predicates');
 *
 * is.empty(''); // true
 * is.empty([]); // true
 * is.empty({}); // true
 * is.empty([1]); // false
 * is.empty('test'); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
declare function isEmpty(value: any): boolean;
export = isEmpty;

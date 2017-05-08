/**
 * Checks whether a value is a function
 *
 * @example
 * var is = require('predicates');
 *
 * is.string('test'); // true
 * is.string({}); // false
 */
function isString(value: any): boolean {
    return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
}

export = isString;

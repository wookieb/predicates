/**
 * Checks whether a value is undefined
 *
 * @example
 * var is = require('predicates');
 *
 * is.undefined(undefined); // true
 * is.undefined(0); // false
 */
function isUndefined(value: any): boolean {
    return typeof value === 'undefined';
}

export default isUndefined;
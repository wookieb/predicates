/**
 * Checks whether a value is a boolean
 *
 * **Aliases** _bool_
 *
 * @function boolean
 *
 * @example
 * var is = require('predicates');
 *
 * is.boolean(true); // true
 * is.boolean(false);; // true
 * is.boolean(0); // false
 *
 * @param value
 */
function isBoolean(value: any): boolean {
    return typeof value === 'boolean' || Object.prototype.toString.call(value) === '[object Boolean]';
}

export = isBoolean;
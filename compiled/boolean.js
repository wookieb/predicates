"use strict";
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
function isBoolean(value) {
    return typeof value === 'boolean' || Object.prototype.toString.call(value) === '[object Boolean]';
}
module.exports = isBoolean;

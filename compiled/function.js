"use strict";
/**
 * Checks whether a value is a function
 *
 * **Aliases** _func_, _fn_
 * @function function
 *
 * @example
 * var is = require('predicates');
 *
 * is.function(function() {}); // true
 * is.function(alert); // true
 * is.function('alert'); // false
 *
 * @param value
 */
function isFunction(value) {
    return typeof value === 'function';
}
module.exports = isFunction;

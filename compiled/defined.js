"use strict";
var isUndefined = require("./undefined");
/**
 * Checks whether a value is not undefined - in other words, is defined
 *
 * @function defined
 *
 * @example
 * var is = require('predicates');
 *
 * is.defined(''); // true
 * is.defined(1); // true
 * is.defined(undefined); // false
 *
 * @param value
 */
function isDefined(value) {
    return !isUndefined(value);
}
module.exports = isDefined;

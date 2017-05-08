"use strict";
var isBoolean = require("./boolean");
/**
 * Checks whether a value is false a boolean false
 *
 * @function false
 *
 * @example
 * var is = require('predicates');
 *
 * is.false(false); // true
 * is.false(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 * @name false
 */
function isFalse(value) {
    return value === false || (isBoolean(value) && value.valueOf() === false);
}
module.exports = isFalse;

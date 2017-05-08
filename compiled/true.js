"use strict";
var isBoolean = require("./boolean");
/**
 * Checks whether a value is a boolean true
 *
 * @example
 * var is = require('predicates');
 *
 * is.true(true); // true
 * is.true('true'); // false
 */
function isTrue(value) {
    return value === true || (isBoolean(value) && value == true);
}
module.exports = isTrue;

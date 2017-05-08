"use strict";
var isNumber = require("./number");
/**
 * Checks whether a value is a number and it's finite
 *
 * @function finite
 *
 * @example
 * var is = require('predicates');
 *
 * is.finite(1); // false
 * is.finite(Infinity); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
function isFinitePolyfill(value) {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
}
module.exports = ('isFinite' in Number) ? Number.isFinite : isFinitePolyfill;

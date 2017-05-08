"use strict";
var isString = require("./string");
var CONTAINS_ONLY_WHITESPACES = /^\s*$/;
/**
 * Checks whether a value is empty string or contains only whitespaces
 *
 * @function blank
 *
 * @example
 * var is = require('predicates');
 *
 * is.blank(''); // true
 * is.blank('    '); // true
 * is.blank('test'); // false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isBlank(value) {
    return isString(value) && (value === '' || CONTAINS_ONLY_WHITESPACES.test(value));
}
module.exports = isBlank;

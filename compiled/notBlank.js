"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
const CONTAINS_AT_LEAST_ONE_NON_WHITESPACE = /\S/;
/**
 * Checks whether a value is a string and contains at least one non-whitespace character
 *
 * @function notBlank
 *
 * @example
 * var is = require('predicates');
 *
 * is.notBlank(''); // false
 * is.notBlank('    '); // false
 * is.notBlank('test'); // true
 * is.notBlank({toString: function() { return 'test'; }}); // false - since it's not a string
 *
 * @param {string} value
 * @returns {boolean}
 */
function notBlank(value) {
    return string_1.default(value) && CONTAINS_AT_LEAST_ONE_NON_WHITESPACE.test(value);
}
exports.default = notBlank;

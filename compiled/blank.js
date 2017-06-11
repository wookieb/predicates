"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
const CONTAINS_ONLY_WHITESPACES = /^\s*$/;
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
    return string_1.default(value) && (value === '' || CONTAINS_ONLY_WHITESPACES.test(value));
}
exports.default = isBlank;

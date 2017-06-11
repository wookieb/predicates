"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether a value is truthy
 *
 * @example
 * var is = require('predicates');
 *
 * is.truthy(true); // true
 * is.truthy(1); // true
 * is.truthy(0); // false
 */
function isTruthy(value) {
    return !!value;
}
exports.default = isTruthy;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether a value is undefined
 *
 * @example
 * var is = require('predicates');
 *
 * is.undefined(undefined); // true
 * is.undefined(0); // false
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.default = isUndefined;

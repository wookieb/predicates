"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether a value is null
 *
 * @function null
 *
 * @example
 * var is = require('predicates');
 *
 * is.null(null); // true
 * is.null({}); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isNull(value) {
    return value === null;
}
exports.default = isNull;

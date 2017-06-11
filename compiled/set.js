"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether value is Set
 *
 * @param {*} value
 * @returns {boolean}
 */
function isSet(value) {
    return typeof Set !== 'undefined' && value !== undefined && value instanceof Set;
}
exports.default = isSet;

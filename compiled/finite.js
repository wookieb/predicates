"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
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
    return number_1.default(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
}
const isFinite = ('isFinite' in Number) ? Number.isFinite : isFinitePolyfill;
console.log('finite', isFinite);
exports.default = isFinite;

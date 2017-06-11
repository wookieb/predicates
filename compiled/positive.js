"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
/**
 * Checks whether a value is a positive number
 *
 * @function positive
 *
 * @example
 * var is = require('predicates');
 *
 * is.positive(10); // true
 * is.positive(-1); // false
 *
 * @param {Number} value
 * @returns {Boolean}
 */
function isPositiveNumber(value) {
    return number_1.default(value) && value > 0;
}
exports.default = isPositiveNumber;

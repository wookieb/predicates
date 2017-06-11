"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
/**
 * Checks whether a value is a negative number
 *
 * @function negative
 *
 * @example
 * var is = require('predicates');
 *
 * is.negative(-1); // true
 * is.negative(0); // false
 *
 * @param {number} value
 * @returns {boolean}
 */
function isNegativeNumber(value) {
    return number_1.default(value) && value < 0;
}
exports.default = isNegativeNumber;

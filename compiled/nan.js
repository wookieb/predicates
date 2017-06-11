"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
/**
 * Checks whether a value is a NaN number
 *
 * **Aliases** _nan_
 * @function NaN
 *
 * @example
 * var is = require('predicates');
 *
 * is.NaN(NaN); // true
 * is.NaN(10); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isNotANumber(value) {
    return number_1.default(value) && isNaN(value);
}
exports.default = isNotANumber;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boolean_1 = require("./boolean");
/**
 * Checks whether a value is false a boolean false
 *
 * @function false
 *
 * @example
 * var is = require('predicates');
 *
 * is.false(false); // true
 * is.false(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 * @name false
 */
function isFalse(value) {
    return value === false || (boolean_1.default(value) && value.valueOf() === false);
}
exports.default = isFalse;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boolean_1 = require("./boolean");
/**
 * Checks whether a value is a boolean true
 *
 * @example
 * var is = require('predicates');
 *
 * is.true(true); // true
 * is.true('true'); // false
 */
function isTrue(value) {
    return value === true || (boolean_1.default(value) && value == true);
}
exports.default = isTrue;

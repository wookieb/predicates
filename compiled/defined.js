"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const undefined_1 = require("./undefined");
/**
 * Checks whether a value is not undefined - in other words, is defined
 *
 * @function defined
 *
 * @example
 * var is = require('predicates');
 *
 * is.defined(''); // true
 * is.defined(1); // true
 * is.defined(undefined); // false
 *
 * @param value
 */
function isDefined(value) {
    return !undefined_1.default(value);
}
exports.default = isDefined;

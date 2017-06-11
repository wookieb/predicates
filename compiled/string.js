"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether a value is a function
 *
 * @example
 * var is = require('predicates');
 *
 * is.string('test'); // true
 * is.string({}); // false
 */
function isString(value) {
    return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
}
exports.default = isString;

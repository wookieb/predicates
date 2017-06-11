"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether a value is a Date object
 *
 * @function date
 *
 * @example
 * var is = require('predicates');
 *
 * is.date(new Date()); true
 * is.date(1415402574000); // false
 *
 * @param value
 */
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
exports.default = isDate;

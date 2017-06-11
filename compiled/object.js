"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether a value is an object and ignores null
 *
 * **Aliases** _obj_
 *
 * @function object
 *
 * @example
 * var is = require('predicates');
 *
 * is.object({}); // true
 * is.object('object'); // false
 *
 * @param value
 */
function isObject(value) {
    return value instanceof Object || (typeof value === 'object' && value !== null);
}
exports.default = isObject;

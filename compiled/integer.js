"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether a value is an integer
 *
 * **Aliases** _int_
 *
 * @function integer
 *
 * @example
 * var is = require('predicates');
 *
 * is.integer(10); // true
 * is.integer(10.4); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
const native_1 = require("./integer/native");
const polyfill_1 = require("./integer/polyfill");
exports.default = native_1.default || polyfill_1.default;

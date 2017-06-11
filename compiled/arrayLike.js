"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
const number_1 = require("./number");
/**
 * Checks whether a value looks like an array
 * That means:
 * * is an object
 * * has 'length' property
 * * 'length' property is a number greater or equal 0
 *
 * **Aliases** _arrLike_
 *
 * @function arrayLike
 *
 * @example
 * var is = require('predicates');
 *
 * is.arrayLike(arguments); // true
 * is.arrayLike(document.querySelectorAll('div')); // true
 * is.arrayLike([1, 2, 3]); // true
 * is.arrayLike({}); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isArrayLike(value) {
    return object_1.default(value) && number_1.default(value.length) && value.length >= 0;
}
exports.default = isArrayLike;

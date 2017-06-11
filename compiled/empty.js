"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
const string_1 = require("./string");
const arrayLike_1 = require("./arrayLike");
/**
 * Checks whether a value is empty
 * Value is empty when:
 * * is an array like object with length === 0
 * * is an object without enumerable properties
 * * is an empty string
 *
 * @function empty
 *
 * @example
 * var is = require('predicates');
 *
 * is.empty(''); // true
 * is.empty([]); // true
 * is.empty({}); // true
 * is.empty([1]); // false
 * is.empty('test'); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isEmpty(value) {
    if (arrayLike_1.default(value)) {
        return value.length === 0;
    }
    else if (object_1.default(value)) {
        return Object.keys(value).length === 0;
    }
    else if (string_1.default(value)) {
        return value == '';
    }
    return value === void 0;
}
exports.default = isEmpty;

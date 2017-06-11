"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
const number_1 = require("./number");
const boolean_1 = require("./boolean");
const undefined_1 = require("./undefined");
const null_1 = require("./null");
const object_1 = require("./object");
/**
 * Checks whether a value is a primitive.
 *
 * Helpful links:
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 * * http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
 *
 * NOTE! A primitive value wrapped by a corresponding object is not a primitive anymore
 * ```js
 * var a = 'test' // this is a primitive
 * a = new String('test'); // and this is not a primitive
 * ```
 *
 * @function primitive
 *
 * @example
 * var is = require('predicates');
 *
 * is.primitive('test'); // true
 * is.primitive(undefined); // true
 * is.primitive(10); // true
 * is.primitive(null); // true
 * is.primitive(false); // true
 *
 * is.primitive(new Number(10)); // false
 * is.primitive(new String('test')); // false
 * is.primitive(new Boolean(true)); // false
 * is.primitive({}); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
function isPrimitive(value) {
    return !object_1.default(value) && (string_1.default(value) || number_1.default(value) || boolean_1.default(value) || undefined_1.default(value) || null_1.default(value));
}
exports.default = isPrimitive;

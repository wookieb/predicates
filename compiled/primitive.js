"use strict";
var isString = require("./string");
var isNumber = require("./number");
var isBoolean = require("./boolean");
var isUndefined = require("./undefined");
var isNull = require("./null");
var isObject = require("./object");
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
    return !isObject(value) && (isString(value) || isNumber(value) || isBoolean(value) || isUndefined(value) || isNull(value));
}
module.exports = isPrimitive;

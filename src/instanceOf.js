'use strict';

var handleCurry = require('./utils/handleCurry'),
    isFunction = require('./function');

/**
 * Checks whether a value is an instance of given "class"
 *
 * @param {Function} clazz
 * @param {*} value
 * @throws {TypeError} if class is not a function
 * @returns {(Boolean|Predicate)} bool if two arguments provided, otherwise a predicate
 */
module.exports = function(clazz) {
    if (!isFunction(clazz)) {
        throw new TypeError('Class must be a function');
    }
    return handleCurry.call(this, arguments, function(value) {
        return value instanceof clazz;
    });
};

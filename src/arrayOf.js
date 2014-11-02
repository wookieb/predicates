'use strict';

var isArray = require('./array'),
    isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether every element of an array passes the predicate
 *
 * @param {Predicate} predicate
 * @param {Array} value
 * @param {...*} additionalArgs additional arguments passed to the predicate
 * @throws {TypeError} if predicate is not a function
 * @returns {(Boolean|Predicate)} returns bool if two arguments provided, otherwise a predicate
 */
module.exports = function(predicate) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry.call(this, arguments, function(value) {
        var additionalArgs = Array.prototype.slice.call(arguments, 1);
        return isArray(value) && value.every(function(value) {
            return predicate.apply(this, [value].concat(additionalArgs))
        }, this);
    });
};

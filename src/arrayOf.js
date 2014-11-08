'use strict';

var isArray = require('./array'),
    isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether every element of an array passes the predicate
 *
 * **Aliases** _arrOf_
 *
 * @function arrayOf
 *
 * @example
 * var is = require('predicates');
 *
 * var isArrayOfStrings = is.arrayOf(is.string);
 *
 * isArrayOfStrings(['1', '2']); // true
 * // same as
 * is.arrayOf(is.string, ['1', '2']); // true
 *
 * isArrayOfStrings([1, 2]); // false
 *
 * @param {Predicate} predicate
 * @param {Array} [value]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @throws {TypeError} if predicate is not a function
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function arrayOf(predicate) {
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

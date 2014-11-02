'use strict';

var isFunction = require('./function'),
    isUndefined = require('./undefined'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is undefined or satisfies given predicate
 * Very useful to check optional arguments of function.
 *
 * @example
 * is.undefinedOr(is.string)(undefined); // true
 * is.undefinedOr(is.string)('test'); // true
 * is.undefinedOr(is.number)('test'); // false
 *
 * @param {Predicate} predicate
 * @param {*} value
 * @returns {(Boolean|Predicate)} returns bool if more than 1 argument provided, otherwise a predicate
 */
module.exports = function(predicate, value) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function(value) {
        return isUndefined(value) || predicate.apply(this, arguments);
    });
};

'use strict';

var assertPredicates = require('./utils/assertPredicates');

/**
 * Returns a function that calls predicates in the order until one of them will be satisfied, otherwise returns false.
 *
 * **Aliases** _or_
 *
 * @function any
 *
 * @example
 * var is = require('predicates');
 *
 * var isStringOrNumber = is.any(is.string, is.number);
 *
 * isStringOrNumber(0); // true
 * isStringOrNumber('string'); // true
 * isStringOrNumber(undefined); // false
 *
 * @param {...Predicate} predicate
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
module.exports = function any(predicate) {
    var predicates = Array.prototype.slice.call(arguments);
    assertPredicates(predicates);

    return function() {
        var args = Array.prototype.slice.call(arguments);
        return predicates.some(function(predicate) {
            return predicate.apply(this, args);
        }, this);
    };
};

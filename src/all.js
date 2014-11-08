'use strict';

var assertPredicates = require('./utils/assertPredicates');

/**
 * Returns a function that calls predicates and returns true if all of them are satisfied, otherwise returns false
 *
 * **Aliases** _and_
 *
 * @function all
 *
 * @example
 * var is = require('predicates');
 * var isNumberGreaterThan10 = is.all(is.number, is.greaterThan(10));
 *
 * isNumberGreaterThan10(0); // false
 * isNumberGreaterThan10(11); // true
 * isNumberGreaterThan10('11'); // false
 *
 * @param {...Predicate} predicate
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
module.exports = function all(predicate) {
    var predicates = Array.prototype.slice.call(arguments);
    assertPredicates(predicates);

    return function() {
        var args = Array.prototype.slice.call(arguments);
        return predicates.every(function(predicate) {
            return predicate.apply(this, args);
        }, this);
    };
};

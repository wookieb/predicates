'use strict';

var assertPredicates = require('./utils/assertPredicates');

/**
 * Returns a function that calls predicates in order until one of them returns true
 *
 * @param {...Predicate} predicate
 * @throws TypeError if not every predicate is a function
 * @returns {Predicate}
 */
module.exports = function(predicate) {
    var predicates = Array.prototype.slice.call(arguments);
    assertPredicates(predicates);

    return function() {
        var args = Array.prototype.slice.call(arguments);
        return predicates.some(function(predicate) {
            return predicate.apply(this, args);
        }, this);
    };
};

"use strict";
var assertPredicates = require("./utils/assertPredicates");
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
 * @param {...Predicate} predicates
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
function any() {
    var predicates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        predicates[_i] = arguments[_i];
    }
    assertPredicates(predicates);
    return function anyPredicate() {
        var _this = this;
        var args = arguments;
        return predicates.some(function (predicate) { return predicate.apply(_this, args); });
    };
}
module.exports = any;

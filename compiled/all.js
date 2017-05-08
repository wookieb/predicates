"use strict";
var assertPredicates = require("./utils/assertPredicates");
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
 * @param {...Predicate} predicates
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
function all() {
    var predicates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        predicates[_i] = arguments[_i];
    }
    assertPredicates(predicates);
    return function () {
        var _this = this;
        var args = arguments;
        return predicates.every(function (predicate) { return predicate.apply(_this, args); });
    };
}
module.exports = all;

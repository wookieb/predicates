"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertPredicates_1 = require("./utils/assertPredicates");
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
function all(...predicates) {
    assertPredicates_1.default(predicates);
    return function () {
        const args = arguments;
        return predicates.every(predicate => predicate.apply(this, args));
    };
}
exports.default = all;

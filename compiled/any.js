"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertPredicates_1 = require("./utils/assertPredicates");
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
function any(...predicates) {
    assertPredicates_1.default(predicates);
    return function anyPredicate() {
        const args = arguments;
        return predicates.some(predicate => predicate.apply(this, args));
    };
}
exports.default = any;

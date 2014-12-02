'use strict';

var divisibleWithRemainder = require('./divisibleWithRemainder');

/**
 * Checks whether a value is a number and it's divisible by divisor
 *
 * **Aliases** _divisibleBy_, _divBy_
 *
 * @function divisible
 *
 * @example
 * var is = require('predicates');
 *
 * is.divisible(7, 14); // true
 * is.divisible(7)(14); // true
 * is.divisible(7, 10); // false
 *
 * @param {Number} divisor
 * @param {Number} [value]
 * @throws {Error} if the divisor is 0
 * @throws {TypeError} if the divisor is not a finite number
 * @returns {(Boolean|Predicate)} returns bool if at least 2 arguments provided, otherwise a predicate
 */
module.exports = function divisible(divisor) {
    return divisibleWithRemainder.apply(
        this,
        [divisor, 0].concat(
            Array.prototype.slice.call(arguments, 1)
        )
    );
};
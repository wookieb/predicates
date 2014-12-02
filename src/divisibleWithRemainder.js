'use strict';

var handleCurry = require('./utils/handleCurry'),
    isFinite = require('./finite'),
    isNumber = require('./number');

/**
 * Checks whether a value is a number and it's divisible by divisor with given remainder
 * In other words value % div === remainder
 *
 * **Aliases** _divisibleByWithRemainder_, _divByWithRemainder_
 *
 * @function divisibleWithRemainder
 *
 * @example
 * var is = require('predicates');
 *
 * is.divisibleWithRemainder(3, 2, 5); // true since 5%3 === 2
 * is.divisibleWithRemainder(3, 2)(5); // true
 * is.divisibleWithRemainder(3, 1, 5); // false since 5%3 !== 1
 *
 * var isEven = is.divisibleWithRemainder(2, 1);
 *
 * isEven(1); // true
 * isEven(2); // false
 * isEven(3); // true
 *
 * *
 * @param {Number} divisor
 * @param {Number} remainder
 * @param {Number} [value]
 * @returns {*}
 */
module.exports = function divisibleWithRemainder(divisor, remainder) {
    if (arguments.length < 2) {
        throw new TypeError('Missing remainder');
    }

    if (!isFinite(divisor)) {
        throw new TypeError('Divisor is not a finite number');
    }

    if (divisor === 0) {
        throw new Error('Divisor cannot be 0');
    }

    if (!isFinite(remainder)) {
        throw new TypeError('Remainder is not a finite number');
    }

    if (remainder >= divisor) {
        throw new Error('Remainder cannot be greater than divisor');
    }

    return handleCurry.call(this, arguments, function isDivisibleBy(value) {
        return isNumber(value) && value%divisor === remainder;
    }, 2);
};
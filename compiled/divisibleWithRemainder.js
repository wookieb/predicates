"use strict";
var handleCurry = require("./utils/handleCurry");
var isFinitePredicate = require("./finite");
var isNumber = require("./number");
function divisibleWithRemainder(divisor, remainder, value) {
    if (arguments.length < 2) {
        throw new Error('Missing remainder');
    }
    if (!isFinitePredicate(divisor)) {
        throw new TypeError('Divisor is not a finite number');
    }
    if (divisor === 0) {
        throw new Error('Divisor cannot be 0');
    }
    if (!isFinitePredicate(remainder)) {
        throw new TypeError('Remainder is not a finite number');
    }
    if (remainder >= divisor) {
        throw new Error('Remainder cannot be greater than divisor');
    }
    return handleCurry.call(this, arguments, function (value) {
        return isNumber(value) && value % divisor === remainder;
    }, 2);
}
module.exports = divisibleWithRemainder;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCurry_1 = require("./utils/handleCurry");
const finite_1 = require("./finite");
const number_1 = require("./number");
function divisibleWithRemainder(divisor, remainder, value) {
    if (arguments.length < 2) {
        throw new Error('Missing remainder');
    }
    if (!finite_1.default(divisor)) {
        throw new TypeError('Divisor is not a finite number');
    }
    if (divisor === 0) {
        throw new Error('Divisor cannot be 0');
    }
    if (!finite_1.default(remainder)) {
        throw new TypeError('Remainder is not a finite number');
    }
    if (remainder >= divisor) {
        throw new Error('Remainder cannot be greater than divisor');
    }
    return handleCurry_1.default.call(this, arguments, (value) => {
        return number_1.default(value) && value % divisor === remainder;
    }, 2);
}
exports.default = divisibleWithRemainder;

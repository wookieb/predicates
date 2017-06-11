"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const divisibleWithRemainder_1 = require("./divisibleWithRemainder");
function divisible(divisor, value) {
    const args = Array.prototype.slice.call(arguments);
    args.splice(1, 0, 0);
    return divisibleWithRemainder_1.default.apply(this, args);
}
exports.default = divisible;

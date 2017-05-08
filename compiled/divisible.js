"use strict";
var divisibleWithRemainder = require("./divisibleWithRemainder");
function divisible(divisor, value) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(1, 0, 0);
    return divisibleWithRemainder.apply(this, args);
}
module.exports = divisible;

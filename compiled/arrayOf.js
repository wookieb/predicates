"use strict";
var isArray = require("./array");
var isFunction = require("./function");
var handleCurry = require("./utils/handleCurry");
function isArrayOf(predicate, value) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry.call(this, arguments, function (value) {
        var _this = this;
        var match = function (value) { return predicate.apply(_this, [value].concat(extraArgs)); };
        return isArray(value) && value.every(match);
    });
}
module.exports = isArrayOf;

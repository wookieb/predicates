"use strict";
var handleCurry = require("./utils/handleCurry");
var isFunction = require("./function");
function isNot(predicate, value) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry.call(this, arguments, function () {
        return !predicate.apply(this, arguments);
    });
}
module.exports = isNot;

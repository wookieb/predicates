"use strict";
var isObject = require("./object");
var isFunction = require("./function");
var handleCurry = require("./utils/handleCurry");
function isObjectOf(predicate, value) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry.call(this, arguments, function isObjectOfPredicate(object) {
        var _this = this;
        var extraArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            extraArgs[_i - 1] = arguments[_i];
        }
        return isObject(object) && Object.keys(object)
            .every(function (key) {
            return predicate.apply(_this, [object[key]].concat(extraArgs));
        });
    });
}
module.exports = isObjectOf;

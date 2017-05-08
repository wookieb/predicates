"use strict";
var handleCurry = require("./utils/handleCurry");
var isUndefined = require("./undefined");
var isFunction = require("./function");
function isUndefinedOr(predicate, value) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry.call(this, arguments, function (value) {
        return isUndefined(value) || predicate.apply(this, arguments);
    });
}
module.exports = isUndefinedOr;

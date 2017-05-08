"use strict";
var handleCurry = require("./utils/handleCurry");
var isFunction = require("./function");
function isInstanceOf(clazz, value) {
    if (!isFunction(clazz)) {
        throw new TypeError('Class must be a function');
    }
    return handleCurry.call(this, arguments, function (value) { return value instanceof clazz; });
}
module.exports = isInstanceOf;

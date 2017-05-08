"use strict";
var isString = require("./string");
var isObject = require("./object");
var handleCurry = require("./utils/handleCurry");
function hasProperty(property, object) {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments, function (object) {
        return isObject(object) && property in object;
    });
}
module.exports = hasProperty;

"use strict";
var isObject = require("./object");
var isString = require("./string");
var handleCurry = require("./utils/handleCurry");
function hasOwnProperty(property, object) {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments, function (object) {
        return isObject(object) && Object.prototype.hasOwnProperty.call(object, property);
    });
}
module.exports = hasOwnProperty;

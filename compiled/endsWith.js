"use strict";
var isString = require("./string");
var handleCurry = require("./utils/handleCurry");
function endsWith(suffix, value) {
    if (!isString(suffix)) {
        throw new TypeError('Suffix must be a string');
    }
    if (suffix === '') {
        throw new Error('Suffix cannot be empty');
    }
    return handleCurry.call(this, arguments, function (value) {
        return isString(value) && value.indexOf(suffix) === value.length - suffix.length;
    });
}
module.exports = endsWith;

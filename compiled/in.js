"use strict";
var isArray = require("./array");
var handleCurry = require("./utils/handleCurry");
function isIn(collection, value) {
    if (!isArray(collection)) {
        throw new TypeError('Collection must be an array');
    }
    if (collection.length === 0) {
        throw new Error('Collection cannot be empty');
    }
    return handleCurry.call(this, arguments, function (value) { return collection.indexOf(value) !== -1; });
}
module.exports = isIn;

"use strict";
var handleCurry = require("./utils/handleCurry");
function isLessThan(expected, value) {
    return handleCurry.call(this, arguments, function (value) { return value < expected; });
}
module.exports = isLessThan;

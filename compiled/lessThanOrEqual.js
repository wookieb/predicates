"use strict";
var handleCurry = require("./utils/handleCurry");
function isLessThanOrEqual(expected, value) {
    return handleCurry.call(this, arguments, function (value) { return value <= expected; });
}
module.exports = isLessThanOrEqual;

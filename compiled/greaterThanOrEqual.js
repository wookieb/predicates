"use strict";
var handleCurry = require("./utils/handleCurry");
function isGreaterThanOrEqual(expected, value) {
    return handleCurry.call(this, arguments, function (value) { return value >= expected; });
}
module.exports = isGreaterThanOrEqual;

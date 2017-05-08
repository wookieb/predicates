"use strict";
var handleCurry = require("./utils/handleCurry");
function isEqual(expected, value) {
    return handleCurry.call(this, arguments, function (value) { return expected == value; });
}
module.exports = isEqual;

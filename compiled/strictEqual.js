"use strict";
var handleCurry = require("./utils/handleCurry");
function isStrictEqual(expected, value) {
    return handleCurry.call(this, arguments, function (value) { return expected === value; });
}
module.exports = isStrictEqual;

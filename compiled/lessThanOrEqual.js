"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCurry_1 = require("./utils/handleCurry");
function isLessThanOrEqual(expected, value) {
    return handleCurry_1.default.call(this, arguments, (value) => value <= expected);
}
exports.default = isLessThanOrEqual;

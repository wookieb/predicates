"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCurry_1 = require("./utils/handleCurry");
function isEqual(expected, value) {
    return handleCurry_1.default.call(this, arguments, (value) => expected == value);
}
exports.default = isEqual;

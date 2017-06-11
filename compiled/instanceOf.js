"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCurry_1 = require("./utils/handleCurry");
const function_1 = require("./function");
function isInstanceOf(clazz, value) {
    if (!function_1.default(clazz)) {
        throw new TypeError('Class must be a function');
    }
    return handleCurry_1.default.call(this, arguments, (value) => value instanceof clazz);
}
exports.default = isInstanceOf;

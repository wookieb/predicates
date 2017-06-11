"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./array");
const function_1 = require("./function");
const handleCurry_1 = require("./utils/handleCurry");
function isArrayOf(predicate, value, ...extraArgs) {
    if (!function_1.default(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry_1.default.call(this, arguments, function (value) {
        const match = (value) => predicate.apply(this, [value].concat(extraArgs));
        return array_1.default(value) && value.every(match);
    });
}
exports.default = isArrayOf;

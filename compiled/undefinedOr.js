"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCurry_1 = require("./utils/handleCurry");
const undefined_1 = require("./undefined");
const function_1 = require("./function");
function isUndefinedOr(predicate, value) {
    if (!function_1.default(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry_1.default.call(this, arguments, function (value) {
        return undefined_1.default(value) || predicate.apply(this, arguments);
    });
}
exports.default = isUndefinedOr;

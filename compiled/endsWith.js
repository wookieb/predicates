"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
const handleCurry_1 = require("./utils/handleCurry");
function endsWith(suffix, value) {
    if (!string_1.default(suffix)) {
        throw new TypeError('Suffix must be a string');
    }
    if (suffix === '') {
        throw new Error('Suffix cannot be empty');
    }
    return handleCurry_1.default.call(this, arguments, (value) => {
        return string_1.default(value) && value.indexOf(suffix) === value.length - suffix.length;
    });
}
exports.default = endsWith;

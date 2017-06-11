"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
const handleCurry_1 = require("./utils/handleCurry");
function startsWith(prefix, value) {
    if (!string_1.default(prefix)) {
        throw new TypeError('Prefix must be a string');
    }
    if (prefix === '') {
        throw new Error('Prefix cannot be empty');
    }
    return handleCurry_1.default.call(this, arguments, function startsWithPredicate(value) {
        return string_1.default(value) && value.indexOf(prefix) === 0;
    });
}
exports.default = startsWith;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
const object_1 = require("./object");
const handleCurry_1 = require("./utils/handleCurry");
function hasProperty(property, object) {
    if (!string_1.default(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry_1.default.call(this, arguments, (object) => {
        return object_1.default(object) && property in object;
    });
}
exports.default = hasProperty;

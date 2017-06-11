"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./array");
const handleCurry_1 = require("./utils/handleCurry");
function isIn(collection, value) {
    if (!array_1.default(collection)) {
        throw new TypeError('Collection must be an array');
    }
    if (collection.length === 0) {
        throw new Error('Collection cannot be empty');
    }
    return handleCurry_1.default.call(this, arguments, (value) => collection.indexOf(value) !== -1);
}
exports.default = isIn;

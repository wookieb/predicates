"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finite_1 = require("../finite");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
function isIntegerPolyfill(value) {
    return finite_1.default(value) && value > -9007199254740992 && value < 9007199254740992 && Math.floor(value) === value;
}
exports.default = isIntegerPolyfill;

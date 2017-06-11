"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleCurry(args, fn, valueIndex) {
    valueIndex = valueIndex === void 0 ? 1 : valueIndex;
    return args.length > valueIndex ? fn.apply(this, Array.prototype.slice.call(args, valueIndex)) : fn;
}
exports.default = handleCurry;

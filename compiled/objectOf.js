"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
const function_1 = require("./function");
const handleCurry_1 = require("./utils/handleCurry");
function isObjectOf(predicate, value, ...extraArgs) {
    if (!function_1.default(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry_1.default.call(this, arguments, function isObjectOfPredicate(object, ...extraArgs) {
        return object_1.default(object) && Object.keys(object)
            .every((key) => {
            return predicate.apply(this, [object[key]].concat(extraArgs));
        });
    });
}
exports.default = isObjectOf;

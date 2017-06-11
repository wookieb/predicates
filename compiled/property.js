"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCurry_1 = require("./utils/handleCurry");
const object_1 = require("./object");
const function_1 = require("./function");
function property(propertyName, predicate, object) {
    if (arguments.length < 2) {
        throw new Error('Too few arguments - 2 required');
    }
    if (!function_1.default(predicate)) {
        throw new TypeError('Predicate is not a function');
    }
    return handleCurry_1.default.call(this, arguments, function isPropertySatisfiesPredicateTest(value) {
        const args = Array.prototype.slice.call(arguments);
        args.splice(0, 1, object_1.default(value) ? value[propertyName] : undefined);
        return object_1.default(value) && predicate.apply(this, args);
    }, 2);
}
exports.default = property;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
const handleCurry_1 = require("./utils/handleCurry");
/**
 * Negates result of a predicate
 *
 * **Aliases** _negate_
 *
 * @function not
 *
 * @example
 * var is = require('predicates');
 *
 * var isNotEmpty = is.not(is.empty);
 * isNotEmpty([1, 2]);// true
 * // same as
 * is.not(is.empty, [1, 2]); // true
 * isNotEmpty(''); // false
 *
 * @param predicate
 */
function isNot(predicate) {
    if (!function_1.default(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry_1.default.call(this, arguments, function () {
        return !predicate.apply(this, arguments);
    });
}
exports.default = isNot;

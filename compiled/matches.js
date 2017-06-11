"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCurry_1 = require("./utils/handleCurry");
const regexp_1 = require("./regexp");
/**
 * Checks whether a value matches a regexp
 *
 * **Aliases** _match_
 *
 * @function matches
 *
 * @example
 * var is = require('predicates');
 *
 * var isWindows9x = is.matches(/^Windows 9/);
 *
 * isWindows9x('Windows 9'); // true - :D
 * // same as
 * is.matches(/^Windows 9/, 'Windows 9'); // also true - hue hue
 *
 * isWindows9x('Windows 10); // false
 *
 * @param {RegExp} regexp
 * @param {string} [value]
 * @throws {TypeError} if regexp is not a regexp
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function matches(regexp, value) {
    if (!regexp_1.default(regexp)) {
        throw new TypeError('Regexp must be a RegExp object');
    }
    return handleCurry_1.default.call(this, arguments, (value) => regexp.test(value));
}
exports.default = matches;

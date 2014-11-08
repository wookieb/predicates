'use strict';

var isRegexp = require('./regexp'),
    handleCurry = require('./utils/handleCurry');

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
 * @param {String} [value]
 * @throws {TypeError} if regexp is not a regexp
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function matches(regexp) {
    if (!isRegexp(regexp)) {
        throw new TypeError('Regexp must be a RegExp object');
    }

    return handleCurry.call(this, arguments, function(value) {
        return regexp.test(value);
    });
};

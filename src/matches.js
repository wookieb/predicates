'use strict';

var isRegexp = require('./regexp'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value matches a regexp
 *
 * @param {RegExp} regexp
 * @param {String} value
 * @throws {TypeError} if regexp is not a regexp
 * @returns {(Boolean|Predicate)} bool if two arguments provided, otherwise a predicate
 */
module.exports = function(regexp) {
    if (!isRegexp(regexp)) {
        throw new TypeError('Regexp must be a RegExp object');
    }

    return handleCurry.call(this, arguments, function(value) {
        return regexp.test(value);
    });
};

'use strict';

var isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a string ends with a given suffix
 *
 * @function endsWith
 *
 * @example
 * var is = require('predicates');
 *
 * var isYelling = is.endsWith('!');
 *
 * isYelling('shut up!'); // true
 * // same as
 * is.endsWith('!', 'shut up!'); // true
 * isYelling('be quiet please'); // false
 *
 * @param {String} suffix
 * @param {String} [value]
 * @throws {TypeError} if suffix is not a string
 * @throws {Error} if suffix is empty
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function endsWith(suffix) {
    if (!isString(suffix)) {
        throw new TypeError('Suffix must be a string');
    }
    if (suffix === '') {
        throw new Error('Suffix cannot be empty');
    }

    return handleCurry.call(this, arguments, function endsWithPredicate(value) {
        return isString(value) && value.indexOf(suffix) === value.length - suffix.length;
    });
};

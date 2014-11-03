'use strict';

var isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a string ends with a given suffix
 *
 * @param {String} suffix
 * @param {String} value
 * @throws {TypeError} if suffix is not a string
 * @throws {Error} if suffix is empty
 * @returns {(Boolean|Predicate)} returns bool if two arguments provided, otherwise a predicate
 */
module.exports = function(suffix) {
    if (!isString(suffix)) {
        throw new TypeError('Suffix must be a string');
    }
    if (suffix === '') {
        throw new Error('Suffix cannot be empty');
    }

    return handleCurry.call(this, arguments, function(value) {
        return isString(value) && value.indexOf(suffix) === value.length-suffix.length;
    });
};

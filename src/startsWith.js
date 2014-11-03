'use strict';
var isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a string starts with a given prefix
 *
 * @param {String} prefix
 * @param {String} value
 * @throws {TypeError} if prefix is not a string
 * @throws {Error} if prefix is empty
 * @returns {(Boolean|Predicate)} returns bool if two arguments provided, otherwise a predicate
 */
module.exports = function(prefix) {
    if (!isString(prefix)) {
        throw new TypeError('Prefix must be a string');
    }
    if (prefix === '') {
        throw new Error('Prefix cannot be empty');
    }

    return handleCurry.call(this, arguments, function(value) {
        return isString(value) && value.indexOf(prefix) === 0;
    });
};

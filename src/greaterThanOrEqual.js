'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is greater or equal to expected number
 *
 * @param {Number} expected
 * @param {Number} value
 * @returns {(Boolean|Predicate)} bool if two arguments provided, otherwise a predicate
 */
module.exports = function(expected, value) {
    return handleCurry.call(this, arguments, function(value) {
        return value >= expected;
    });
};

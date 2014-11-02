'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether values are equal (using == operator)
 *
 * @param {*} expected
 * @param {*} value
 * @returns {(Boolean|Predicate)} bool if two arguments provided, otherwise a predicate
 */
module.exports = function(expected, value) {
    return handleCurry.call(this, arguments, function(value) {
        return expected == value;
    });
};

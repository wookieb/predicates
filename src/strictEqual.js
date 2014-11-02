'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a valuse is the same as expected (using === operator)
 *
 * @param {*} expected
 * @param {*} [value]
 * @returns {(Boolean|Predicate)} bool if two arguments provided, otherwise a predicate
 */
module.exports = function(expected) {
    return handleCurry.call(this, arguments, function(value) {
        return expected === value;
    });
};

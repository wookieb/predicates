'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is less or equal to expected number
 *
 * **Aliases** _lessOrEqual_, _lessEq_, _ltEq_
 *
 * @function lessThanOrEqual
 *
 * @example
 * var is = require('predicates');
 *
 * var isChildAge = is.lessThanOrEqual(17);
 *
 * isChildAge(10); // true
 * // same as
 * is.lessThanOrEqual(17, 10); // true
 *
 * isChildAge(18); // false
 *
 * @param {Number} expected
 * @param {Number} value
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function lessThanOrEqual(expected, value) {
    return handleCurry.call(this, arguments, function(value) {
        return value <= expected;
    });
};

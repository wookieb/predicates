'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether values are equal (using == operator)
 *
 * **Aliases** _equalTo_, _eq_
 * @function equal
 *
 * @example
 * var is = require('predicates');
 *
 * var isTimmy = is.equal('Timmy');
 *
 * isTimmy('Timmy'); // true
 * // same as
 * is.equal('Timmy', 'Timmy'); // true
 * is.equal(1, '1'); // true
 * isTimmy('Franko'); // false
 *
 * @param {*} expected
 * @param {*} value
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function equal(expected, value) {
    return handleCurry.call(this, arguments, function(value) {
        return expected == value;
    });
};

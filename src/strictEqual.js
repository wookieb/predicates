'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is strictly equal to expected value (uses === operator)
 *
 * **Aliases** _strictEqualTo_
 *
 * @function strictEqual
 *
 * @example
 * var is = require('predicates');
 *
 * var mom = {};
 * var isMyMom = is.strictEqual(mom);
 *
 * isMyMom(mom); // true - mom is only one. Remember about it...
 * // same as
 * is.strictEqual(mom, mom); // true
 * isMyMom({}); // false
 *
 *
 * @param {*} expected
 * @param {*} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isStrictEqual(expected) {
    return handleCurry.call(this, arguments, function isStrictEqualPredicate(value) {
        return expected === value;
    });
};

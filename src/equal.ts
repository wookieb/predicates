import {Predicate} from './types';

import handleCurry = require('./utils/handleCurry');

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
 * @param {*} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function isEqual(expected: any): Predicate;
function isEqual(expected: any, value: any): boolean;
function isEqual(expected: any, value?: any): boolean | Predicate {
    return handleCurry.call(this, arguments, (value: any) => expected == value);
}

export = isEqual;

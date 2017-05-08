import { Predicate } from './types';
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
declare function isEqual(expected: any): Predicate;
declare function isEqual(expected: any, value: any): boolean;
export = isEqual;

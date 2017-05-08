import { Predicate } from './types';
/**
 * Checks whether a value is greater or equal to expected number
 *
 * **Aliases** _greaterOrEqual_, _greaterEq_, _gtEq_
 *
 * @function greaterThanOrEqual
 *
 * @example
 * var is = require('predicates');
 *
 * var isAdultAge = is.greaterThanOrEqual(18);
 *
 * isAdultAge(22); // true
 * // same as
 * is.greaterThanOrEqual(18, 22);
 *
 * isAdultAge(16); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
declare function isGreaterThanOrEqual(expected: number): Predicate;
declare function isGreaterThanOrEqual(expected: number, value: number): boolean;
export = isGreaterThanOrEqual;

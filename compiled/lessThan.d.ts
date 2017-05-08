import { Predicate } from './types';
/**
 * Checks whether a value is less than expected number
 *
 * **Aliases** _less_, _lt_
 *
 * @function lessThan
 *
 * @example
 *
 * var isChildAge = is.lessThan(18);
 *
 * isChildAge(10); // true
 * // same as
 * is.lessThan(18, 10); // true
 * isChildAge(18); // false
 * isChildAge(22); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
declare function isLessThan(expected: number): Predicate;
declare function isLessThan(expected: number, value: number): boolean;
export = isLessThan;

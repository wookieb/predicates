import { Predicate } from './types';
/**
 * Checks whether a value is greater than expected number
 *
 * **Aliases** _greater_, _gt_
 * @function greaterThan
 *
 * @example
 * var is = require('predicates');
 *
 * var isGreaterThan0 = is.greaterThan(0);
 *
 * isGreaterThan0(10); // true
 * // same as
 * is.greaterThan(0, 10); // true
 * isGreaterThan0(-1); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
declare function isGreaterThan(expected: number): Predicate;
declare function isGreaterThan(expected: number, value: number): boolean;
export = isGreaterThan;

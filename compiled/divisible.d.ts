import { Predicate } from './types';
/**
 * Checks whether a value is a number and it's divisible by a divisor
 *
 * **Aliases** _divisibleBy_, _divBy_
 *
 * @function divisible
 *
 * @example
 * const is = require('predicates');
 *
 * is.divisible(7, 14); // true
 * is.divisible(7)(14); // true
 * is.divisible(7, 10); // false
 *
 * @param {Number} divisor
 * @param {Number} [value]
 * @throws {Error} if divisor is 0
 * @throws {TypeError} if divisor is not a finite number
 * @returns {(Boolean|Predicate)} returns bool if at least 2 arguments provided, otherwise a predicate
 */
declare function divisible(divisor: number): Predicate;
declare function divisible(divisor: number, value: number): boolean;
export = divisible;

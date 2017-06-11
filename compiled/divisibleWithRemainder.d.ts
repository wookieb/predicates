import { Predicate } from './types';
/**
 * Checks whether a value is a number and it's divisible by divisor with given remainder
 * In other words value % div === remainder
 *
 * **Aliases** _divisibleByWithRemainder_, _divByWithRemainder_
 *
 * @function divisibleWithRemainder
 *
 * @example
 * var is = require('predicates');
 *
 * is.divisibleWithRemainder(3, 2, 5); // true since 5%3 === 2
 * is.divisibleWithRemainder(3, 2)(5); // true
 * is.divisibleWithRemainder(3, 1, 5); // false since 5%3 !== 1
 *
 * var isEven = is.divisibleWithRemainder(2, 1);
 *
 * isEven(1); // true
 * isEven(2); // false
 * isEven(3); // true
 *
 * *
 * @param {Number} divisor
 * @param {Number} remainder
 * @param {Number} [value]
 * @throws {Error} if less than 2 arguments provided
 * @throws {Error} if the divisor is 0
 * @throws {Error} if the remainder is greater than the divisor
 * @throws {TypeError} if the divisor is not a finite number
 * @throws {TypeError} if the remainder is not a finite number
 * @returns {(Boolean|Predicate)} returns bool if at least 3 arguments provided, otherwise a predicate
 */
declare function divisibleWithRemainder(divisor: number, remainder: number): Predicate;
declare function divisibleWithRemainder(divisor: number, remainder: number, value: number): boolean;
export default divisibleWithRemainder;
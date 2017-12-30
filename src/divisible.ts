import {Predicate} from './types';
import divisibleWithRemainder from './divisibleWithRemainder';

/**
 * Checks whether a value is a number and it's divisible by a divisor
 *
 * @example
 * is.divisible(7, 14); // true
 * is.divisible(7)(14); // true
 * is.divisible(7, 10); // false
 *
 * @param {Number} divisor
 * @param {Number} [value]
 * @throws {Error} if divisor is 0
 * @throws {TypeError} if divisor is not a finite number
 * @returns {(boolean|Predicate)} returns bool if at least 2 arguments provided, otherwise a predicate
 */
function divisible(divisor: number): Predicate<number>;
function divisible(divisor: number, value: number): boolean;
function divisible(divisor: number, value?: number): boolean | Predicate<number> {
    const args = Array.prototype.slice.call(arguments);
    args.splice(1, 0, 0);
    return divisibleWithRemainder.apply(this, args);
}

export default divisible;
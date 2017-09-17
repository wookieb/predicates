import handleCurry from './utils/handleCurry';
import isFinitePredicate from './finite';
import isNumber from './number';
import {Predicate, TypeGuardPredicate} from './types';
import {setDescription} from "./utils/description";

/**
 * Checks whether a value is a number and it's divisible by divisor with given remainder
 * In other words value % div === remainder
 *
 * @example
 * is.divisibleWithRemainder(3, 2, 5); // true since 5%3 === 2
 * is.divisibleWithRemainder(3, 2)(5); // true
 * is.divisibleWithRemainder(3, 1, 5); // false since 5%3 !== 1
 *
 * const isEven = is.divisibleWithRemainder(2, 1);
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
 * @returns {(boolean|Predicate)} returns bool if at least 3 arguments provided, otherwise a predicate
 */
function divisibleWithRemainder(divisor: number, remainder: number): TypeGuardPredicate<number>;
function divisibleWithRemainder(divisor: number, remainder: number, value: number): value is number;
function divisibleWithRemainder(divisor: number, remainder: number, value?: number): boolean | TypeGuardPredicate<number> {
    if (arguments.length < 2) {
        throw new Error('Missing remainder');
    }

    if (!isFinitePredicate(divisor)) {
        throw new TypeError('Divisor is not a finite number');
    }

    if (divisor === 0) {
        throw new Error('Divisor cannot be 0');
    }

    if (!isFinitePredicate(remainder)) {
        throw new TypeError('Remainder is not a finite number');
    }

    if (remainder >= divisor) {
        throw new Error('Remainder cannot be greater than divisor');
    }

    return handleCurry.call(this, arguments,
        setDescription(
            (value: number) => {
                return isNumber(value) && value % divisor === remainder;
            },
            'a number divisible by ' + divisor + ' with remainder ' + remainder
        )
        , 2);
}

export default divisibleWithRemainder;
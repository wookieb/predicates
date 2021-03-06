import handleCurry from './utils/handleCurry';
import {Predicate, TypeGuardPredicate} from './types';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is greater than expected number
 *
 * @example
 * const isGreaterThan0 = is.greaterThan(0);
 *
 * isGreaterThan0(10); // true
 * // same as
 * is.greaterThan(0, 10); // true
 * isGreaterThan0(-1); // false
 */
function isGreaterThan<T = number>(expected: T): Predicate<T>;
function isGreaterThan<T = number>(expected: T, value: any): boolean;
function isGreaterThan<T = number>(expected: T, value?: any): boolean | Predicate<T> {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: any) => value > expected,
            'greater than ' + expected
        )
    );
}

export default isGreaterThan;
import handleCurry from './utils/handleCurry';
import {Predicate, TypeGuardPredicate} from './types';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is less than expected number
 *
 * **Type guard:** value is T = number
 *
 * @example
 * const isChildAge = is.lessThan(18);
 *
 * isChildAge(10); // true
 * // same as
 * is.lessThan(18, 10); // true
 * isChildAge(18); // false
 *
 * @param {*} expected
 * @param {*} [value]
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function isLessThan<T = number>(expected: T): TypeGuardPredicate<T>;
function isLessThan<T = number>(expected: T, value: any): value is T;
function isLessThan<T = number>(expected: T, value?: any): boolean | TypeGuardPredicate<T> {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: T) => value < expected,
            'less than ' + expected
        )
    );
}

export default isLessThan;
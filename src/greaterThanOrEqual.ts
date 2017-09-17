import handleCurry from './utils/handleCurry';
import {Predicate, TypeGuardPredicate} from './types';
import {setDescription} from "./utils/description";

/**
 * Checks whether a value is greater or equal to expected number
 *
 * @example
 * const isAdultAge = is.greaterThanOrEqual(18);
 *
 * isAdultAge(22); // true
 * // same as
 * is.greaterThanOrEqual(18, 22);
 *
 * isAdultAge(16); // false
 *
 * @param {*} expected
 * @param {*} [value]
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function isGreaterThanOrEqual<T = number>(expected: T): TypeGuardPredicate<T>;
function isGreaterThanOrEqual<T = number>(expected: T, value: any): value is T;
function isGreaterThanOrEqual<T = number>(expected: T, value?: any): boolean | TypeGuardPredicate<T> {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: any) => value >= expected,
            'greater than or equal ' + expected
        )
    );
}

export default isGreaterThanOrEqual;

import {Predicate, TypeGuardPredicate} from './types';
import handleCurry from './utils/handleCurry';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is less or equal to expected number
 *

 *
 * @example
 * const isChildAge = is.lessThanOrEqual(17);
 *
 * isChildAge(10); // true
 * // same as
 * is.lessThanOrEqual(17, 10); // true
 *
 * isChildAge(18); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function isLessThanOrEqual<T = number>(expected: T): Predicate<T>;
function isLessThanOrEqual<T = number>(expected: T, value: any): boolean;
function isLessThanOrEqual<T = number>(expected: T, value?: any): boolean | Predicate<T> {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: T) => value <= expected,
            'less than or equal ' + expected
        )
    );
}

export default isLessThanOrEqual;
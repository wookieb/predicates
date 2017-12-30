import handleCurry from './utils/handleCurry';
import {Predicate} from './types';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is less than expected number
 *
 * @example
 * const isChildAge = is.lessThan(18);
 *
 * isChildAge(10); // true
 * // same as
 * is.lessThan(18, 10); // true
 * isChildAge(18); // false
 */
function isLessThan<T = number>(expected: T): Predicate<T>;
function isLessThan<T = number>(expected: T, value: any): boolean;
function isLessThan<T = number>(expected: T, value?: any): boolean | Predicate<T> {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: T) => value < expected,
            'less than ' + expected
        )
    );
}

export default isLessThan;
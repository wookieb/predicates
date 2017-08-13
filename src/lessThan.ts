import handleCurry from './utils/handleCurry';
import {Predicate} from './types';
import {setDescription} from "./utils/description";

/**
 * Checks whether a value is less than expected number
 *
 * **Aliases** _less_, _lt_
 *
 * @function lessThan
 *
 * @example
 *
 * var isChildAge = is.lessThan(18);
 *
 * isChildAge(10); // true
 * // same as
 * is.lessThan(18, 10); // true
 * isChildAge(18); // false
 * isChildAge(22); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function isLessThan(expected: number): Predicate;
function isLessThan(expected: number, value: number): boolean;
function isLessThan(expected: number, value?: number): boolean | Predicate {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: number) => value < expected,
            'less than ' + expected
        )
    );
}

export default isLessThan;
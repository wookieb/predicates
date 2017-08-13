import {Predicate} from './types';
import handleCurry from './utils/handleCurry';
import {setDescription} from "./utils/description";

/**
 * Checks whether a value is less or equal to expected number
 *
 * **Aliases** _lessOrEqual_, _lessEq_, _ltEq_
 *
 * @function lessThanOrEqual
 *
 * @example
 * var is = require('predicates');
 *
 * var isChildAge = is.lessThanOrEqual(17);
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
function isLessThanOrEqual(expected: number): Predicate;
function isLessThanOrEqual(expected: number, value: number): boolean;
function isLessThanOrEqual(expected: number, value?: number): boolean | Predicate {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: number) => value <= expected,
            'less than or equal ' + expected
        )
    );
}

export default isLessThanOrEqual;
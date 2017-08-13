import handleCurry from './utils/handleCurry';
import {Predicate} from './types';
import {setDescription} from "./utils/description";

/**
 * Checks whether a value is greater or equal to expected number
 *
 * **Aliases** _greaterOrEqual_, _greaterEq_, _gtEq_
 *
 * @function greaterThanOrEqual
 *
 * @example
 * var is = require('predicates');
 *
 * var isAdultAge = is.greaterThanOrEqual(18);
 *
 * isAdultAge(22); // true
 * // same as
 * is.greaterThanOrEqual(18, 22);
 *
 * isAdultAge(16); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */

function isGreaterThanOrEqual(expected: number): Predicate;
function isGreaterThanOrEqual(expected: number, value: number): boolean;
function isGreaterThanOrEqual(expected: number, value?: number): boolean | Predicate {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: number) => value >= expected,
            'greater than or equal ' + expected
        )
    );
}

export default isGreaterThanOrEqual;

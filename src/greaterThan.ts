import handleCurry from './utils/handleCurry';
import {Predicate} from './types';
import {setDescription} from "./utils/description";

/**
 * Checks whether a value is greater than expected number
 *
 * **Aliases** _greater_, _gt_
 * @function greaterThan
 *
 * @example
 * var is = require('predicates');
 *
 * var isGreaterThan0 = is.greaterThan(0);
 *
 * isGreaterThan0(10); // true
 * // same as
 * is.greaterThan(0, 10); // true
 * isGreaterThan0(-1); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function isGreaterThan(expected: number): Predicate;
function isGreaterThan(expected: number, value: number): boolean;
function isGreaterThan(expected: number, value?: number): boolean | Predicate {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: number) => value > expected,
            'greater than ' + expected
        )
    );
}

export default isGreaterThan;
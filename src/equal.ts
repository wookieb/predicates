import {Predicate} from './types';

import handleCurry from './utils/handleCurry';
import {setDescription} from './utils/description';

/**
 * Checks whether values are equal (using == operator)
 *
 * **Type guard:** _none_
 *
 * @example
 * const isTimmy = is.equal('Timmy');
 *
 * isTimmy('Timmy'); // true
 * // same as
 * is.equal('Timmy', 'Timmy'); // true
 * is.equal(1, '1'); // true
 * isTimmy('Franko'); // false
 *
 * @param {*} expected
 * @param {*} [value]
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function isEqual(expected: any): Predicate;
function isEqual(expected: any, value: any): boolean;
function isEqual(expected: any, value?: any): boolean | Predicate {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: any) => expected == value,
            'equal to ' + JSON.stringify(expected)
        )
    );
}

export default isEqual;

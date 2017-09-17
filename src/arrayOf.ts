import {Predicate} from './types';

import isArray from './array';
import isFunction from './function';
import handleCurry from './utils/handleCurry';
import {getDescription, setDescription} from "./utils/description";

/**
 * Checks whether every element of an array passes the predicate
 *
 * @example
 * const isArrayOfStrings = is.arrayOf(is.string);
 *
 * isArrayOfStrings(['1', '2']); // true
 * // same as
 * is.arrayOf(is.string, ['1', '2']); // true
 *
 * isArrayOfStrings([1, 2]); // false
 *
 * @param {Predicate} predicate
 * @param {Array} [value]
 * @param {...*} [extraArgs] additional arguments passed to the predicate
 * @throws {TypeError} if predicate is not a function
 * @returns {(boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
function isArrayOf(predicate: Predicate): Predicate;
function isArrayOf(predicate: Predicate, value: any[]): boolean;
function isArrayOf(predicate: Predicate, value?: any[], ...extraArgs: any[]): boolean | Predicate {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments,
        setDescription(function (value: any) {
                const match = (value: any) => predicate.apply(this, [value].concat(extraArgs));
                return isArray(value) && value.every(match);
            },
            'an array of elements of type: ' + getDescription(predicate)
        )
    );
}

export default isArrayOf;
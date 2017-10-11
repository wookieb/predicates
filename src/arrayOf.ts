import {Predicate, TypeGuardPredicate} from './types';

import isArray from './array';
import isFunction from './function';
import handleCurry from './utils/handleCurry';
import {getDescription, setDescription} from './utils/description';
import {getPredicateForType} from './typeToPredicate';

/**
 * Checks whether every element of an array passes the predicate
 *
 * **Type guard:** value is Array<T = any>
 *
 * @example
 * const isArrayOfStrings = is.arrayOf(is.string);
 *
 * isArrayOfStrings(['1', '2']); // true
 * // same as
 * is.arrayOf(is.string, ['1', '2']); // true
 * // same as
 * is.arrayOf(String, ['1', '2']); // true
 *
 * isArrayOfStrings([1, 2]); // false
 *
 * @param {Predicate|Function} predicate or simple type constructor
 * @param {Array} [value]
 * @param {...*} [extraArgs] additional arguments passed to the predicate
 * @throws {TypeError} if predicate is not a function
 * @returns {(boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
function isArrayOf<T = any>(predicate: Predicate | Function): TypeGuardPredicate<Array<T>>;
function isArrayOf<T = any>(predicate: Predicate | Function, value: any[]): value is Array<T>;
function isArrayOf<T>(predicate: Predicate | Function, value?: any[], ...extraArgs: any[]): boolean | TypeGuardPredicate<Array<T>> {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    predicate = getPredicateForType(predicate) || predicate;

    return handleCurry.call(this, arguments,
        setDescription(function (value: any) {
                const match = (value: any) => predicate.apply(this, [value].concat(extraArgs));
                return isArray(value) && value.every(match);
            },
            'an array of elements of type: ' + getDescription(<Predicate>predicate)
        )
    );
}

export default isArrayOf;
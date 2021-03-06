import {Predicate} from './types';

import handleCurry from './utils/handleCurry';
import isUndefined from './undefined';
import isFunction from './function';
import {getDescription, setDescription} from './utils/description';
import {getPredicateForType} from './typeToPredicate';

/**
 * Checks whether a value is undefined or satisfies given predicate
 * Very useful to check optional arguments of function.
 *
 * @example
 * const isUndefinedOrString = is.undefinedOr(is.string);
 *
 * isUndefinedOrString(undefined); // true
 * isUndefinedOrString('test'); // true
 *
 * // same as
 * is.undefinedOr(is.string, undefined); // true
 * is.undefinedOr(is.string, 'test'); // true
 *
 * isUndefinedOrString({}); // false
 *
 * // simpler for common types
 * is.undefinedOr(String)(undefined); // true
 * is.undefinedOr(String)('test'); // true
 *
 * @throws {TypeError} if provided predicate is not a function
 */
function isUndefinedOr<T = any>(predicate: Predicate | Function): Predicate<undefined | T>;
function isUndefinedOr<T = any>(predicate: Predicate | Function, value: any): boolean;
function isUndefinedOr<T = any>(predicate: Predicate | Function, value?: any): boolean | Predicate<undefined | T> {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    predicate = getPredicateForType(predicate) || predicate;

    return handleCurry.call(this, arguments,
        setDescription(
            function (value: any) {
                return isUndefined(value) || predicate.apply(this, arguments);
            },
            'undefined or ' + getDescription(<Predicate>predicate)
        )
    );
}

export default isUndefinedOr;

import {Predicate, TypeGuardPredicate} from './types';

import handleCurry from './utils/handleCurry';
import isUndefined from './undefined';
import isFunction from './function';
import {getDescription, setDescription} from "./utils/description";

/**
 * Checks whether a value is undefined or satisfies given predicate
 * Very useful to check optional arguments of function.
 *
 * @example
 * const isUndefinedOrString = is.undefinedOr(is.string);
 *
 * isUndefinedOrString(undefined); // true
 * isUndefinedOrString('test'); // true
 * // same as
 * is.undefinedOr(is.string, undefined); // true
 * is.undefinedOr(is.string, 'test'); // true
 *
 * isUndefinedOrString({}); // false
 */
function isUndefinedOr<T = any>(predicate: Predicate): TypeGuardPredicate<undefined | T>;
function isUndefinedOr<T = any>(predicate: Predicate, value: any): value is (undefined | T);
function isUndefinedOr<T = any>(predicate: Predicate, value?: any): boolean | TypeGuardPredicate<undefined | T> {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments,
        setDescription(
            function (value: any) {
                return isUndefined(value) || predicate.apply(this, arguments);
            },
            'undefined or ' + getDescription(predicate)
        )
    );
}

export default isUndefinedOr;

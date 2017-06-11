import {Predicate} from './types';
import isFunction from './function';
import handleCurry from './utils/handleCurry';

/**
 * Negates result of a predicate
 *
 * **Aliases** _negate_
 *
 * @function not
 *
 * @example
 * var is = require('predicates');
 *
 * var isNotEmpty = is.not(is.empty);
 * isNotEmpty([1, 2]);// true
 * // same as
 * is.not(is.empty, [1, 2]); // true
 * isNotEmpty(''); // false
 *
 * @param predicate
 */
export default function isNot(predicate: Predicate): Predicate {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function () {
        return !predicate.apply(this, arguments);
    });
}
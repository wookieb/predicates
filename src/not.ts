import {Predicate} from './types';
import isFunction from './function';
import handleCurry from './utils/handleCurry';
import {getDescription, setDescription} from './utils/description';

/**
 * Negates result of a predicate
 *
 * @example
 * const isNotEmpty = is.not(is.empty);
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

    return handleCurry.call(this, arguments,
        setDescription(
            function () {
                return !predicate.apply(this, arguments);
            },
            'not ' + getDescription(predicate)
        )
    );
}
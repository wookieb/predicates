import {Predicate, TypeGuardPredicate} from './types';
import isString from './string';
import handleCurry from './utils/handleCurry';
import {setDescription} from './utils/description';

/**
 * Checks whether a string ends with a given suffix
 *
 * @example
 * const isYelling = is.endsWith('!');
 *
 * isYelling('shut up!'); // true
 * // same as
 * is.endsWith('!', 'shut up!'); // true
 * isYelling('quiet please'); // false
 *
 * @throws {TypeError} if suffix is not a string
 * @throws {Error} if suffix is empty
 */
function endsWith(suffix: string): TypeGuardPredicate<string>;
function endsWith(suffix: string, value: any): value is string;
function endsWith(suffix: string, value?: any): boolean | TypeGuardPredicate<string> {
    if (!isString(suffix)) {
        throw new TypeError('Suffix must be a string');
    }
    if (suffix === '') {
        throw new Error('Suffix cannot be empty');
    }

    return handleCurry.call(this, arguments,
        setDescription(
            (value: string) => {
                return isString(value) && value.indexOf(suffix) === value.length - suffix.length;
            },
            'a string that ends with "' + suffix + '"'
        )
    );
}

export default endsWith;
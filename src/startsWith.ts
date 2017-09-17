import {Predicate, TypeGuardPredicate} from './types';
import isString from './string';
import handleCurry from './utils/handleCurry';
import {setDescription} from './utils/description';

/**
 * Checks whether a string starts with a given prefix
 *
 * @example
 * const isProfessor = is.startsWith('Prof. ');
 * isProfessor('Prof. Bend Ovah'); // true
 * // same as
 * is.startsWith('Prof. ', 'Prof. Bend Ovah'); // true
 *
 * isProfessor('Dr. Here U\' Are'); // false
 *
 * @throws {TypeError} if prefix is not a string
 * @throws {Error} if prefix is empty
 */
function startsWith(prefix: string): TypeGuardPredicate<string>;
function startsWith(prefix: string, value: any): value is string;
function startsWith(prefix: string, value?: any): boolean | TypeGuardPredicate<string> {
    if (!isString(prefix)) {
        throw new TypeError('Prefix must be a string');
    }
    if (prefix === '') {
        throw new Error('Prefix cannot be empty');
    }

    return handleCurry.call(this, arguments,
        setDescription(
            function startsWithPredicate(value: any) {
                return isString(value) && value.indexOf(prefix) === 0;
            },
            'a string that starts with "' + prefix + '"'
        )
    );
}

export default startsWith;

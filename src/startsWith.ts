import {Predicate} from './types';
import isString from './string';
import handleCurry from './utils/handleCurry';

/**
 * Checks whether a string starts with a given prefix
 *
 * @function startsWith
 *
 * @example
 * var is = require('predicates');
 *
 * var isProfessor = is.startsWith('Prof. ');
 * isProfessor('Prof. Bend Ovah'); // true
 * // same as
 * is.startsWith('Prof. ', 'Prof. Bend Ovah'); // true
 *
 * isProfessor('Dr. Here U\' Are'); // false
 *
 * @throws {TypeError} if prefix is not a string
 * @throws {Error} if prefix is empty
 */
function startsWith(prefix: string): Predicate;
function startsWith(prefix: string, value: string): boolean;
function startsWith(prefix: string, value?: string): boolean | Predicate {
    if (!isString(prefix)) {
        throw new TypeError('Prefix must be a string');
    }
    if (prefix === '') {
        throw new Error('Prefix cannot be empty');
    }

    return handleCurry.call(this, arguments, function startsWithPredicate(value: any) {
        return isString(value) && value.indexOf(prefix) === 0;
    });
}

export default startsWith;

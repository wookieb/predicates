import {Predicate} from './types';
import isString = require('./string');
import handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a string ends with a given suffix
 *
 * @function endsWith
 *
 * @example
 * var is = require('predicates');
 *
 * var isYelling = is.endsWith('!');
 *
 * isYelling('shut up!'); // true
 * // same as
 * is.endsWith('!', 'shut up!'); // true
 * isYelling('be quiet please'); // false
 *
 * @param {String} suffix
 * @param {String} [value]
 * @throws {TypeError} if suffix is not a string
 * @throws {Error} if suffix is empty
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
function endsWith(suffix: string): Predicate;
function endsWith(suffix: string, value: string): boolean;
function endsWith(suffix: string, value?: string): boolean | Predicate {
    if (!isString(suffix)) {
        throw new TypeError('Suffix must be a string');
    }
    if (suffix === '') {
        throw new Error('Suffix cannot be empty');
    }

    return handleCurry.call(this, arguments, (value: string) => {
        return isString(value) && value.indexOf(suffix) === value.length - suffix.length;
    });
}

export = endsWith;
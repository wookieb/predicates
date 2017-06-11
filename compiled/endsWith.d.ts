import { Predicate } from './types';
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
declare function endsWith(suffix: string): Predicate;
declare function endsWith(suffix: string, value: string): boolean;
export default endsWith;

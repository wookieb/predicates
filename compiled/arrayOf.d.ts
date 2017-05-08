import { Predicate } from './types';
/**
 * Checks whether every element of an array passes the predicate
 *
 * **Aliases** _arrOf_
 *
 * @function arrayOf
 *
 * @example
 * var is = require('predicates');
 *
 * var isArrayOfStrings = is.arrayOf(is.string);
 *
 * isArrayOfStrings(['1', '2']); // true
 * // same as
 * is.arrayOf(is.string, ['1', '2']); // true
 *
 * isArrayOfStrings([1, 2]); // false
 *
 * @param {Predicate} predicate
 * @param {Array} [value]
 * @param {...*} [extraArgs] additional arguments passed to the predicate
 * @throws {TypeError} if predicate is not a function
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
declare function isArrayOf(predicate: Predicate): Predicate;
declare function isArrayOf(predicate: Predicate, value: any[]): boolean;
export = isArrayOf;

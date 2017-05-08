import { Predicate } from './types';
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
 * @param {Predicate} predicate
 * @param {*} [value]
 * @param {...*} [extraArgs] additional arguments passed to the predicate
 * @returns {(boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
declare function isNot(predicate: Predicate): Predicate;
declare function isNot(predicate: Predicate, value: any): boolean;
export = isNot;

import { Predicate } from './types';
/**
 * Checks whether every enumerable property of object satisfies a predicate
 *
 * **Aliases** _objOf_
 *
 * @function objectOf
 *
 * @example
 * var is = require('predicates');
 *
 * var isObjectOfStrings = is.objectOf(is.string);
 *
 * isObjectOfStrings({key: 'value', key1: 'value'}); // true
 * // same as
 * is.objectOf(is.string, {key: 'value', key1: 'value'}); // true
 *
 * isObjectOfStrings({key: 1, key1: 'value'}); // false
 *
 * @param {Predicate} predicate
 * @param {Object} [object]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
declare function isObjectOf(predicate: Predicate): Predicate;
declare function isObjectOf(predicate: Predicate, value: Object): boolean;
export = isObjectOf;

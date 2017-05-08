import { Predicate } from './types';
/**
 * Checks whether a value is strictly equal to expected value (uses === operator)
 *
 * @example
 * var is = require('predicates');
 *
 * var mom = {};
 * var isMyMom = is.strictEqual(mom);
 *
 * isMyMom(mom); // true - mom is only one. Remember about it...
 * // same as
 * is.strictEqual(mom, mom); // true
 * isMyMom({}); // false
 */
declare function isStrictEqual(expected: any): Predicate;
declare function isStrictEqual(expected: any, value: any): boolean;
export = isStrictEqual;

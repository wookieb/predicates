import {Predicate} from './types';
import handleCurry = require('./utils/handleCurry');


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
function isStrictEqual(expected: any): Predicate;
function isStrictEqual(expected: any, value: any): boolean;
function isStrictEqual(expected: any, value?: any): Predicate | boolean {
    return handleCurry.call(this, arguments, (value: any) => expected === value);
}

export = isStrictEqual;

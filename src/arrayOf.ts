import {Predicate} from './types';

import isArray = require('./array');
import isFunction = require('./function');
import handleCurry = require('./utils/handleCurry');

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
function isArrayOf(predicate: Predicate): Predicate;
function isArrayOf(predicate: Predicate, value: any[]): boolean;
function isArrayOf(predicate: Predicate, value?: any[], ...extraArgs: any[]): boolean | Predicate {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function (value: any) {
        const match = (value: any) => predicate.apply(this, [value].concat(extraArgs));
        return isArray(value) && value.every(match);
    });
}

export = isArrayOf;
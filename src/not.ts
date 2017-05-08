import {Predicate} from './types';
import handleCurry = require('./utils/handleCurry');
import isFunction = require('./function');


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
function isNot(predicate: Predicate): Predicate;
function isNot(predicate: Predicate, value: any): boolean;
function isNot(predicate: Predicate, value?: any, ...extraArgs: any[]): boolean | Predicate {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function () {
        return !predicate.apply(this, arguments);
    });
}

export = isNot;

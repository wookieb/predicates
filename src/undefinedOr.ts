import {Predicate} from './types';

import handleCurry = require('./utils/handleCurry');
import isUndefined = require('./undefined');
import isFunction = require('./function');


/**
 * Checks whether a value is undefined or satisfies given predicate
 * Very useful to check optional arguments of function.
 *
 * @example
 * var is = require('predicates');
 *
 * var isUndefinedOrString = is.undefinedOr(is.string);
 *
 * isUndefinedOrString(undefined); // true
 * isUndefinedOrString('test'); // true
 * // same as
 * is.undefinedOr(is.string, undefined); // true
 * is.undefinedOr(is.string, 'test'); // true
 *
 * isUndefinedOrString({}); // false
 */
function isUndefinedOr(predicate: Predicate): Predicate;
function isUndefinedOr(predicate: Predicate, value: any): boolean;
function isUndefinedOr(predicate: Predicate, value?: any): boolean | Predicate {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function (value: any) {
        return isUndefined(value) || predicate.apply(this, arguments);
    });
}
export = isUndefinedOr;

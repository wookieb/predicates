import { Predicate } from './types';
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
declare function isUndefinedOr(predicate: Predicate): Predicate;
declare function isUndefinedOr(predicate: Predicate, value: any): boolean;
export = isUndefinedOr;

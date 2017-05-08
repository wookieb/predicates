import { Predicate } from './types';
/**
 * Checks whether a value exists in collection
 * Values are compared using === operator
 *
 * @function in
 *
 * @example
 * var is = require('predicates');
 *
 * var isImage = is.in(['image/gif', 'image/jpeg']);
 * // same as
 * // var isImage = is.oneOf('image/gif', 'image/jpeg');
 *
 * isImage('image/jpeg'); // true
 * // same as
 * is.in(['image/gif', 'image/jpeg'], 'image/jpeg'); // true
 *
 * isImage('text/html'); // false
 *
 * @param {Array} collection of allowed values
 * @param {*} [value]
 * @throws {TypeError} if collection is not an array
 * @throws {Error} if collection is empty
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
declare function isIn(collection: any[]): Predicate;
declare function isIn(collection: any[], value: any): boolean;
export = isIn;

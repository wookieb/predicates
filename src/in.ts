import isArray from './array';
import handleCurry from './utils/handleCurry';
import {Predicate} from './types';

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
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function isIn(collection: any[]): Predicate;
function isIn(collection: any[], value: any): boolean;
function isIn(collection: any[], value?: any): boolean | Predicate {
    if (!isArray(collection)) {
        throw new TypeError('Collection must be an array');
    }

    if (collection.length === 0) {
        throw new Error('Collection cannot be empty');
    }

    return handleCurry.call(this, arguments, (value: any) => collection.indexOf(value) !== -1);
}

export default isIn;

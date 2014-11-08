'use strict';

var isArray = require('./array'),
    handleCurry = require('./utils/handleCurry');

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
 * @param {*} value
 * @throws {TypeError} if collection is not an array
 * @throws {Error} if collection is empty
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function(collection, value) {
    if (!isArray(collection)) {
        throw new TypeError('Collection must be an array');
    }

    if (collection.length === 0) {
        throw new Error('Collection cannot be empty');
    }

    return handleCurry.call(this, arguments, function(value) {
        return collection.indexOf(value) !== -1;
    });
};

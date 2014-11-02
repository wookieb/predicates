'use strict';

var isArray = require('./array'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value exists in collection
 * Values are compared using === operator
 *
 * @param {Array} collection
 * @param {*} value
 * @throws {TypeError} if collection is not an array
 * @throws {Error} if collection is empty
 * @returns {(Boolean|Predicate)} bool if two arguments provided, otherwise a predicate
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

'use strict';

var isArrayLike = require('./arrayLike'),
    isObject = require('./object'),
    isString = require('./string');

/**
 * Checks whether a value is empty
 * Value is empty if:
 * * is an array like object with length === 0
 * * is an object without enumerable properties
 * * is an empty string
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function(value) {
    if (isArrayLike(value)) {
        return value.length === 0;
    } else if (isObject(value)) {
        return Object.keys(value).length === 0;
    } else if (isString(value)) {
        return value === '';
    }
    return false;
};

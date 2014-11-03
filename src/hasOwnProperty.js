'use strict';

var isObject = require('./object'),
    isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether an object has own property
 *
 * @param {String} property
 * @param {Object} object
 * @throws {TypeError} if property is not a string
 * @returns {(Boolean|Predicate)} bool if two arguments provided, otherwise a predicate
 */
module.exports = function(property, object) {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments, function(object) {
        return isObject(object) && object.hasOwnProperty(property);
    });
};

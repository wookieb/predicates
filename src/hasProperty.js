'use strict';

var isObject = require('./object'),
    isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether an object has a given property
 *
 * **Aliases** _has_
 *
 * @function hasProperty
 *
 * @example
 * var is = require('predicates');
 *
 * var isDuck = is.hasProperty('quack');
 *
 * isDuck({quack: ':)'}); // true
 * // same as
 * is.hasProperty('quack', {quack: ':)'}); // true
 *
 * isDuck({type: 'car'}); // false
 *
 * @param {String} property
 * @param {Object} object
 * @throws {TypeError} if property is not a string
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function hasProperty(property, object) {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments, function(object) {
        return isObject(object) && property in object;
    });
};

'use strict';

var isObject = require('./object'),
    isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether an object has own property
 *
 * **Aliases** _hasOwn_
 *
 * @function hasOwnProperty
 *
 * @example
 * var is = require('predicates');
 *
 * var isCustomized = is.hasOwnProperty('delay');
 *
 * var Timer = function() {};
 * Timer.prototype.delay = 100;
 *
 * var timer1 = new Timer();
 * var timer2 = new Timer();
 * timer1.delay = 1000;
 *
 * isCustomized(timer1) // true
 * // same as
 * is.hasOwnProperty('delay', timer1); // true
 *
 * isCustomized(timer2); // false
 *
 * @param {String} property
 * @param {Object} [object]
 * @throws {TypeError} if property is not a string
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function hasOwnProperty(property) {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments, function hasOwnPropertyPredicate(object) {
        return isObject(object) && Object.prototype.hasOwnProperty.call(object, property);
    });
};
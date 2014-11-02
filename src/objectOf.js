'use strict';

var isObject = require('./object'),
    isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether every enumerable property of object satisfies a predicate
 * The predicate is being called with the following properties:
 * * property value
 * * property name
 *
 * @param {Predicate} predicate
 * @param {Object} object
 * @returns {(Boolean|Predicate)} returns bool if two arguments provided, otherwise a predicate
 */
module.exports = function(predicate, object) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function(object) {
        var args = Array.prototype.slice.call(arguments, 1);
        return isObject(object) && Object
            .keys(object)
            .every(function(key) {
                return predicate.apply(this, [object[key]].concat(args));
            }, this);
    });
};

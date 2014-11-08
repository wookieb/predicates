'use strict';

var isObject = require('./object'),
    isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether every enumerable property of object satisfies a predicate
 *
 * **Aliases** _objOf_
 *
 * @function objectOf
 *
 * @example
 * var is = require('predicates');
 *
 * var isObjectOfStrings = is.objectOf(is.string);
 *
 * isObjectOfStrings({key: 'value', key1: 'value'}); // true
 * // same as
 * is.objectOf(is.string, {key: 'value', key1: 'value'}); // true
 *
 * isObjectOfStrings({key: 1, key1: 'value'}); // false
 *
 * @param {Predicate} predicate
 * @param {Object} [object]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function objectOf(predicate, object) {
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

'use strict';

var isObject = require('./object'),
    isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value of given property of an object satisfies a predicate
 *
 * If you need to check more properties at a time use {@link structure}.
 *
 * NOTE! Provided predicate will be called ALWAYS if a provided value is an object.
 *
 * **Aliases** _prop_
 *
 * @function property
 *
 * @example
 * var is = require('predicates');
 *
 * is.property('name', is.string, {name: 'Tommy'}); // true
 * is.property('name', is.string)({name: 'Tommy'}); // true
 * is.property('name', is.string, {name: 2}); // false - since 2 is not a string
 * is.property('name', is.string, {}); // false - since undefined is not a string
 *
 * @param {*} propertyName
 * @param {Predicate} predicate
 * @param {Object} [value]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @throws {TypeError} if predicate is not a function
 * @throws {Error} if too few arguments provided
 * @return {(Boolean|Predicate)} boolean if at least 3 arguments provided, otherwise a predicate
 */
module.exports = function property(propertyName, predicate) {
    if (arguments.length < 2) {
        throw new Error('Too few arguments - 2 required');
    }

    if (!isFunction(predicate)) {
        throw new TypeError('Predicate is not a function');
    }

    return handleCurry.call(this, arguments, function isPropertySatisfiesPredicateTest(value) {
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1, value[propertyName]);
        return isObject(value) && predicate.apply(this, args);
    }, 2);
};
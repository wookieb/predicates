'use strict';

var isObject = require('./object'),
    handleCurry = require('./utils/handleCurry'),
    objectOf = require('./objectOf'),
    isFunction = require('./function');

var isObjectOfPredicates = objectOf(isFunction);

/**
 * Checks whether an object satisfies predicates defined in structure
 * NOTE: All predicates defined in structure must be satisfied.
 * If some of the properties are optional use [undefinedOr](#undefinedOr)
 *
 * @function structure
 *
 * @example
 * var is = require('predicates');
 *
 * var schema = {
 *      name: is.string, // only string
 *      phone: is.or(is.string, is.number), // string or number
 *      surname: is.undefinedOr(is.string) // optional
 * },
 *     isPerson = is.structure(schema);
 *
 * var person = {name: 'Tommy', phone: 80129292};
 * isPerson(person); // true
 * // same as
 * is.structure(schema, person); // true
 * isPerson({name: 'Tommy'});
 * @param {Object} structure
 * @param {Object} value
 * @return {(Boolean|Predicate)} returns bool if more than 1 argument provided, otherwise a predicate
 */
module.exports = function structure(structure, value) {
    if (!isObject(structure)) {
        throw new TypeError('Structure must be an object');
    }

    var keys = Object.keys(structure);
    if (keys.length === 0) {
        throw new Error('Structure object cannot be empty. No enumerable properties found');
    }

    if (!isObjectOfPredicates(structure)) {
        throw new TypeError('Structure object must consist of predicates');
    }

    return handleCurry.call(this, arguments, function(value) {
        var args = Array.prototype.slice.call(arguments, 1);
        return isObject(value) && keys.every(function(key) {
            return structure[key].apply(this, [value[key]].concat(args));
        }, this);
    });
};

'use strict';
/**
 * Returns a function that checks whether a value is equal to one of allowed values
 * Function compares values using === operator
 *
 * @function oneOf
 *
 * @example
 * var is = require('predicates');
 *
 * var isAllowedToAccess = is.oneOf('ROLE_ADMIN', 'ROLE_USER');
 * // same as
 * // var isAllowedToAccess = is.in(['ROLE_ADMIN', 'ROLE_USER']);
 *
 * isAllowedToAccess('ROLE_ADMIN'); // true
 * isAllowedToAccess('ROLE_ANONYMOUS'); // false
 *
 * @param {...*} allowedValue
 * @throws {Error} if 0 or 1 allowed value provided
 * @returns {Predicate}
 */
module.exports = function isOneOf() {
    var allowedValues = Array.prototype.slice.call(arguments);

    if (allowedValues.length < 2) {
        throw new Error('At least 2 allowed values are required');
    }

    return function isOneOfPredicate(value) {
        return allowedValues.indexOf(value) !== -1;
    };
};

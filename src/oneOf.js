'use strict';
/**
 * Returns a function that checks whether a value is equal to one of allowed values
 * Function compares values using === operator
 *
 * @param {...*} allowedValue
 * @throws {Error} if 0 or 1 allowed value provided
 * @returns {Predicate}
 */
module.exports = function() {
    var allowedValues = Array.prototype.slice.call(arguments);

    if (allowedValues.length < 2) {
        throw new Error('At least 2 allowed values are required');
    }

    return function(value) {
        return allowedValues.indexOf(value) !== -1;
    }
};

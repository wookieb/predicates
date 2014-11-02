'use strict';

var isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Negates result of a predicate
 *
 * @param {Predicate} predicate
 * @param {*} value
 * @param {...*} additionalArgs additional arguments passed to the predicate
 * @returns {(Boolean|Predicate)} returns bool if two arguments provided, otherwise a predicate
 */
module.exports = function(predicate) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function() {
        return !predicate.apply(this, arguments);
    });
};

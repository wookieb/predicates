'use strict';

var isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Negates result of a predicate
 *
 * **Aliases** _negate_
 *
 * @function not
 *
 * @example
 * var is = require('predicates');
 *
 * var isNotEmpty = is.not(is.empty);
 * isNotEmpty([1, 2]);// true
 * // same as
 * is.not(is.empty, [1, 2]); // true
 * isNotEmpty(''); // false
 *
 * @param {Predicate} predicate
 * @param {*} [value]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function not(predicate) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function() {
        return !predicate.apply(this, arguments);
    });
};

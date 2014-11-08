'use strict';

/**
 * Checks whether a value is false (using === operator).
 *
 * @function false
 *
 * @example
 * var is = require('predicates');
 *
 * is.false(false); // true
 * is.false(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 * @name false
 */
module.exports = function(value) {
    return value === false;
};

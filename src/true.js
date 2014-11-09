'use strict';

/**
 * Checks whether a value is true (using === operator)
 *
 * @function true
 *
 * @example
 * var is = require('predicates');
 *
 * is.true(true); // true
 * is.true('true'); // false
 *
 * @param {Boolean} value
 * @returns {Boolean}
 */
module.exports = function(value) {
    return value === true;
};
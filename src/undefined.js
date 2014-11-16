'use strict';

/**
 * Checks whether a value is undefined
 *
 * @function undefined
 *
 * @example
 * var is = require('predicates');
 *
 * is.undefined(undefined); // true
 * is.undefined(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isUndefined(value) {
    return typeof value === 'undefined';
};

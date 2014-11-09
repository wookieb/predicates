'use strict';
var isEmpty = require('./empty'),
    not = require('./not');

/**
 * Checks whether value is not empty
 * See [empty](#empty) for list of conditions that determine whether value is empty
 *
 * @function notEmpty
 *
 * @example
 * var is = require('predicates');
 *
 * is.notEmpty([1]); // true
 * is.notEmpty('value'); // true
 * is.notEmpty([]); // false
 * is.notEmpty(''); // false
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = not(isEmpty);
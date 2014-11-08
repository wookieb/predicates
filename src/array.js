'use strict';

/**
 * Checks whether a value is an array
 *
 * **Aliases** _arr_
 *
 * @function array
 *
 * @example
 * var is = require('predicates');
 *
 * is.array([]); // true
 * is.array({}); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = Array.isArray;

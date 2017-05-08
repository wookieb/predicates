/**
 * Checks whether a value is an integer
 *
 * **Aliases** _int_
 *
 * @function integer
 *
 * @example
 * var is = require('predicates');
 *
 * is.integer(10); // true
 * is.integer(10.4); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
import native = require('./integer/native');
import polyfill = require('./integer/polyfill');

export = native || polyfill;

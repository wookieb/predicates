'use strict';

/**
 * Checks whether a value is NaN
 *
 * **Aliases** _notANumber_, _nan_
 * @function NaN
 *
 * @example
 * var is = require('predicates');
 *
 * is.NaN(NaN); // true
 * is.NaN(10); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = Number.isNaN;

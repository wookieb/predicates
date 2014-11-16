'use strict';

/**
 * Checks whether a value is null
 *
 * @function null
 *
 * @example
 * var is = require('predicates');
 *
 * is.null(null); // true
 * is.null({}); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isNull(value) {
    return value === null;
};

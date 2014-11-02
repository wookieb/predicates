'use strict';

var isString = require('./string');

/**
 * Checks whether a value is empty or contains only whitespaces
 *
 * @param {String} value
 * @returns {Boolean}
 */
module.exports = function(value) {
    return isString(value) && String.prototype.trim.call(value) === '';
};

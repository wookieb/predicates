'use strict';

var isNumber = require('./number');

/**
 * Checks whether a value is a positive number
 *
 * @param {Number} value
 * @returns {Boolean}
 */
module.exports = function(value) {
    return isNumber(value) && value > 0;
};

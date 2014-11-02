'use strict';

/**
 * Checks whether a value is a boolean
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]';
};

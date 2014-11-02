'use strict';

var isUndefined = require('./undefined');

/**
 * Checks whether a value is not undefined
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function(value) {
    return !isUndefined(value);
};

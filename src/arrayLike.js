'use strict';

var isObject = require('./object'),
    isNumber = require('./number');

/**
 * Checks whether a values looks like an array
 * That means:
 * * is an object
 * * has 'length' property
 * * 'length' property is a number greater or equal 0
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function(value) {
    return isObject(value) && isNumber(value.length) && value.length >= 0;
};

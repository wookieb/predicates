'use strict';

var isNumber = require('../number');

module.exports = function isFinitePolyfill(value) {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
};

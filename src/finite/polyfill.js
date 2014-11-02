'use strict';

var isNumber = require('../number');

module.exports = function(value) {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !Number.isNaN(value);
};

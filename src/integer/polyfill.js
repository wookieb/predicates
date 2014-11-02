'use strict';

var isFinite = require('../finite');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
module.exports = function(value) {
    return isFinite(value) && value > -9007199254740992 && value < 9007199254740992 && Math.floor(value) === value;
};

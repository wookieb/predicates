'use strict';

var isFinitePredicate = require('../finite');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
module.exports = function isIntegerPolyfill(value) {
    return isFinitePredicate(value) && value > -9007199254740992 && value < 9007199254740992 && Math.floor(value) === value;
};

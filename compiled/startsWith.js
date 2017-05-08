"use strict";
var isString = require("./string");
var handleCurry = require("./utils/handleCurry");
function startsWith(prefix, value) {
    if (!isString(prefix)) {
        throw new TypeError('Prefix must be a string');
    }
    if (prefix === '') {
        throw new Error('Prefix cannot be empty');
    }
    return handleCurry.call(this, arguments, function startsWithPredicate(value) {
        return isString(value) && value.indexOf(prefix) === 0;
    });
}
module.exports = startsWith;

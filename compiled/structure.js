"use strict";
var isObject = require("./object");
var handleCurry = require("./utils/handleCurry");
var objectOf = require("./objectOf");
var isFunction = require("./function");
var isObjectOfPredicates = objectOf(isFunction);
function isStructure(structure, value) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    if (!isObject(structure)) {
        throw new TypeError('Structure must be an object');
    }
    var keys = Object.keys(structure);
    if (keys.length === 0) {
        throw new Error('Structure object cannot be empty. No enumerable properties found');
    }
    if (!isObjectOfPredicates(structure)) {
        throw new TypeError('Structure object must consist of predicates');
    }
    return handleCurry.call(this, arguments, function isStructurePredicate(value) {
        var _this = this;
        var match = function (key) { return structure[key].apply(_this, [value[key]].concat(extraArgs)); };
        return isObject(value) && keys.every(match);
    });
}
module.exports = isStructure;

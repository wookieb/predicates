"use strict";
var handleCurry = require("./utils/handleCurry");
var isObject = require("./object");
var isFunction = require("./function");
function property(propertyName, predicate, object) {
    if (arguments.length < 2) {
        throw new Error('Too few arguments - 2 required');
    }
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate is not a function');
    }
    return handleCurry.call(this, arguments, function isPropertySatisfiesPredicateTest(value) {
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1, isObject(value) ? value[propertyName] : undefined);
        return isObject(value) && predicate.apply(this, args);
    }, 2);
}
module.exports = property;

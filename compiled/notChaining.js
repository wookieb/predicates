"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_1 = require("./not");
const array_1 = require("./array");
const arrayLike_1 = require("./arrayLike");
const arrayOf_1 = require("./arrayOf");
const notBlank_1 = require("./notBlank");
const boolean_1 = require("./boolean");
const date_1 = require("./date");
const divisible_1 = require("./divisible");
const divisibleWithRemainder_1 = require("./divisibleWithRemainder");
const empty_1 = require("./empty");
const endsWith_1 = require("./endsWith");
const equal_1 = require("./equal");
const false_1 = require("./false");
const defined_1 = require("./defined");
const finite_1 = require("./finite");
const function_1 = require("./function");
const greaterThan_1 = require("./greaterThan");
const greaterThanOrEqual_1 = require("./greaterThanOrEqual");
const hasOwnProperty_1 = require("./hasOwnProperty");
const hasProperty_1 = require("./hasProperty");
const in_1 = require("./in");
const instanceOf_1 = require("./instanceOf");
const integer_1 = require("./integer");
const lessThan_1 = require("./lessThan");
const lessThanOrEqual_1 = require("./lessThanOrEqual");
const matches_1 = require("./matches");
const nan_1 = require("./nan");
const null_1 = require("./null");
const number_1 = require("./number");
const object_1 = require("./object");
const objectOf_1 = require("./objectOf");
const plainObject_1 = require("./plainObject");
const truthy_1 = require("./truthy");
function extend(a, b) {
    for (const key in b) {
        if (Object.prototype.hasOwnProperty.call(b, key)) {
            a[key] = b[key];
        }
    }
    return a;
}
const isNotArray = not_1.default(array_1.default);
const isNotArrayLike = not_1.default(arrayLike_1.default);
const isNotArrayOf = not_1.default(arrayOf_1.default);
const isNotBoolean = not_1.default(boolean_1.default);
const isNotDivisible = not_1.default(divisible_1.default);
const isNotDivisibleWithRemainder = not_1.default(divisibleWithRemainder_1.default);
const isNotEqual = not_1.default(equal_1.default);
const isNotFunction = not_1.default(function_1.default);
const isNotGreaterThan = not_1.default(greaterThan_1.default);
const isNotGreaterThanOrEqual = not_1.default(greaterThanOrEqual_1.default);
const isNotHasOwnProperty = not_1.default(hasOwnProperty_1.default);
const isNotHasProperty = not_1.default(hasProperty_1.default);
const isNotIn = not_1.default(in_1.default);
const isNotInstanceOf = not_1.default(instanceOf_1.default);
const isNotInteger = not_1.default(integer_1.default);
const isNotLessThan = not_1.default(lessThan_1.default);
const isNotLessThanOrEqual = not_1.default(lessThanOrEqual_1.default);
const isNotMatches = not_1.default(matches_1.default);
const isNotNaN = not_1.default(nan_1.default);
const isNotNull = not_1.default(null_1.default);
const isNotNumber = not_1.default(number_1.default);
const isNotObject = not_1.default(object_1.default);
const isNotObjectOf = not_1.default(objectOf_1.default);
const isNotPlainObject = not_1.default(plainObject_1.default);
exports.default = extend(not_1.default, Object.assign({
    arr: isNotArray,
    array: isNotArray
}, {
    arrayLike: isNotArrayLike,
    arrLike: isNotArrayLike
}, {
    arrOf: isNotArrayOf,
    arrayOf: isNotArrayOf
}, { blank: notBlank_1.default }, {
    bool: isNotBoolean,
    boolean: isNotBoolean
}, { date: not_1.default(date_1.default), defined: defined_1.default }, {
    divBy: isNotDivisible,
    divisible: isNotDivisible,
    divisibleBy: isNotDivisible
}, {
    divByWithRemainder: isNotDivisibleWithRemainder,
    divisibleByWithRemainder: isNotDivisibleWithRemainder,
    divisibleWithRemainder: isNotDivisibleWithRemainder
}, { empty: not_1.default(empty_1.default), endsWith: not_1.default(endsWith_1.default) }, {
    eq: isNotEqual,
    equalTo: isNotEqual,
    equal: isNotEqual
}, { false: false_1.default }, {
    falsy: truthy_1.default,
    falsey: truthy_1.default
}, { finite: not_1.default(finite_1.default) }, {
    fn: isNotFunction,
    'function': isNotFunction,
    func: isNotFunction
}, {
    gt: isNotGreaterThan,
    greater: isNotGreaterThan,
    greaterThan: isNotGreaterThan
}, {
    gtEq: isNotGreaterThanOrEqual,
    greaterEq: isNotGreaterThanOrEqual,
    greaterOrEqual: isNotGreaterThanOrEqual,
    greaterThanOrEqual: isNotGreaterThanOrEqual
}, {
    hasOwn: isNotHasOwnProperty,
    hasOwnProperty: isNotHasOwnProperty
}, {
    has: isNotHasProperty,
    hasProperty: isNotHasProperty
}, { 'in': isNotIn }, {
    instanceOf: isNotInstanceOf,
    instance: isNotInstanceOf
}, {
    int: isNotInteger,
    integer: isNotInteger
}, { undefined: not_1.default(defined_1.default) }));

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.predicates=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.all = exports.and = require('./src/all');
exports.any = exports.or = require('./src/any');
exports.array = exports.arr = require('./src/array');
exports.arrayLike = exports.arrLike = require('./src/arrayLike');
exports.arrayOf = exports.arrOf = require('./src/arrayOf');
exports.blank = require('./src/blank');
exports.boolean = exports.bool = require('./src/boolean');
exports.date = require('./src/date');
exports.defined = require('./src/defined');
exports.divisible = exports.divisibleBy = exports.divBy = require('./src/divisible');
exports.divisibleWithRemainder = exports.divisibleByWithRemainder = exports.divByWithRemainder = require('./src/divisibleWithRemainder');
exports.empty = require('./src/empty');
exports.endsWith = require('./src/endsWith');
exports.equal = exports.equalTo = exports.eq = require('./src/equal');
exports.false = require('./src/false');
exports.falsy = exports.falsey = require('./src/falsy');
exports.finite = require('./src/finite');
exports.function = exports.fn = exports.func = require('./src/function');
exports.greaterThan = exports.greater = exports.gt = require('./src/greaterThan');
exports.greaterThanOrEqual = exports.greaterOrEqual = exports.greaterEq = exports.gtEq = require('./src/greaterThanOrEqual');
exports.hasOwnProperty = exports.hasOwn = require('./src/hasOwnProperty');
exports.hasProperty = exports.has = require('./src/hasProperty');
exports.in = require('./src/in');
exports.instanceOf = exports.instance = require('./src/instanceOf');
exports.integer = exports.int = require('./src/integer');
exports.lessThan = exports.less = exports.lt = require('./src/lessThan');
exports.lessThanOrEqual = exports.lessOrEqual = exports.lessEq = exports.ltEq = require('./src/lessThanOrEqual');
exports.matches = exports.match = require('./src/matches');
exports.notANumber = exports.nan = exports.NaN = require('./src/nan');
exports.negative = require('./src/negative');
exports.not = exports.negate = require('./src/not');
exports.notBlank = require('./src/notBlank');
exports.notEmpty = require('./src/notEmpty');
exports.null = require('./src/null');
exports.number = exports.num = require('./src/number');
exports.object = exports.obj = require('./src/object');
exports.objectOf = exports.objOf = require('./src/objectOf');
exports.oneOf = require('./src/oneOf');
exports.plainObject = require('./src/plainObject');
exports.positive = require('./src/positive');
exports.primitive = require('./src/primitive');
exports.property = exports.prop = require('./src/property');
exports.regexp = exports.regExp = require('./src/regexp');
exports.startsWith = require('./src/startsWith');
exports.strictEqual = exports.strictEqualTo = require('./src/strictEqual');
exports.string = exports.str = require('./src/string');
exports.structure = require('./src/structure');
exports.true = require('./src/true');
exports.truthy = require('./src/truthy');
exports.undefined = require('./src/undefined');
exports.undefinedOr = require('./src/undefinedOr');

},{"./src/all":2,"./src/any":3,"./src/array":4,"./src/arrayLike":5,"./src/arrayOf":6,"./src/blank":7,"./src/boolean":8,"./src/date":9,"./src/defined":10,"./src/divisible":11,"./src/divisibleWithRemainder":12,"./src/empty":13,"./src/endsWith":14,"./src/equal":15,"./src/false":16,"./src/falsy":17,"./src/finite":18,"./src/function":21,"./src/greaterThan":22,"./src/greaterThanOrEqual":23,"./src/hasOwnProperty":24,"./src/hasProperty":25,"./src/in":26,"./src/instanceOf":27,"./src/integer":28,"./src/lessThan":31,"./src/lessThanOrEqual":32,"./src/matches":33,"./src/nan":34,"./src/negative":35,"./src/not":36,"./src/notBlank":37,"./src/notEmpty":38,"./src/null":39,"./src/number":40,"./src/object":41,"./src/objectOf":42,"./src/oneOf":43,"./src/plainObject":44,"./src/positive":45,"./src/primitive":46,"./src/property":47,"./src/regexp":48,"./src/startsWith":49,"./src/strictEqual":50,"./src/string":51,"./src/structure":52,"./src/true":53,"./src/truthy":54,"./src/undefined":55,"./src/undefinedOr":56}],2:[function(require,module,exports){
'use strict';

var assertPredicates = require('./utils/assertPredicates');

/**
 * Returns a function that calls predicates and returns true if all of them are satisfied, otherwise returns false
 *
 * **Aliases** _and_
 *
 * @function all
 *
 * @example
 * var is = require('predicates');
 * var isNumberGreaterThan10 = is.all(is.number, is.greaterThan(10));
 *
 * isNumberGreaterThan10(0); // false
 * isNumberGreaterThan10(11); // true
 * isNumberGreaterThan10('11'); // false
 *
 * @param {...Predicate} predicate
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
module.exports = function all() {
    var predicates = Array.prototype.slice.call(arguments);
    assertPredicates(predicates);

    return function allPredicate() {
        var args = Array.prototype.slice.call(arguments);
        return predicates.every(function allPredicateTestingPredicate(predicate) {
            return predicate.apply(this, args);
        }, this);
    };
};

},{"./utils/assertPredicates":57}],3:[function(require,module,exports){
'use strict';

var assertPredicates = require('./utils/assertPredicates');

/**
 * Returns a function that calls predicates in the order until one of them will be satisfied, otherwise returns false.
 *
 * **Aliases** _or_
 *
 * @function any
 *
 * @example
 * var is = require('predicates');
 *
 * var isStringOrNumber = is.any(is.string, is.number);
 *
 * isStringOrNumber(0); // true
 * isStringOrNumber('string'); // true
 * isStringOrNumber(undefined); // false
 *
 * @param {...Predicate} predicate
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
module.exports = function any() {
    var predicates = Array.prototype.slice.call(arguments);
    assertPredicates(predicates);

    return function anyPredicate() {
        var args = Array.prototype.slice.call(arguments);
        return predicates.some(function anyPredicateTestingPredicate(predicate) {
            return predicate.apply(this, args);
        }, this);
    };
};

},{"./utils/assertPredicates":57}],4:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is an array
 *
 * **Aliases** _arr_
 *
 * @function array
 *
 * @example
 * var is = require('predicates');
 *
 * is.array([]); // true
 * is.array({}); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = Array.isArray;

},{}],5:[function(require,module,exports){
'use strict';

var isObject = require('./object'),
    isNumber = require('./number');

/**
 * Checks whether a value looks like an array
 * That means:
 * * is an object
 * * has 'length' property
 * * 'length' property is a number greater or equal 0
 *
 * **Aliases** _arrLike_
 *
 * @function arrayLike
 *
 * @example
 * var is = require('predicates');
 *
 * is.arrayLike(arguments); // true
 * is.arrayLike(document.querySelectorAll('div')); // true
 * is.arrayLike([1, 2, 3]); // true
 * is.arrayLike({}); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isArrayLike(value) {
    return isObject(value) && isNumber(value.length) && value.length >= 0;
};

},{"./number":40,"./object":41}],6:[function(require,module,exports){
'use strict';

var isArray = require('./array'),
    isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether every element of an array passes the predicate
 *
 * **Aliases** _arrOf_
 *
 * @function arrayOf
 *
 * @example
 * var is = require('predicates');
 *
 * var isArrayOfStrings = is.arrayOf(is.string);
 *
 * isArrayOfStrings(['1', '2']); // true
 * // same as
 * is.arrayOf(is.string, ['1', '2']); // true
 *
 * isArrayOfStrings([1, 2]); // false
 *
 * @param {Predicate} predicate
 * @param {Array} [value]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @throws {TypeError} if predicate is not a function
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isArrayOf(predicate) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }
    return handleCurry.call(this, arguments, function isArrayOfPredicate(value) {
        var additionalArgs = Array.prototype.slice.call(arguments, 1);
        return isArray(value) && value.every(function isArrayOfPredicateTestingArrayItem(value) {
            return predicate.apply(this, [value].concat(additionalArgs));
        }, this);
    });
};

},{"./array":4,"./function":21,"./utils/handleCurry":58}],7:[function(require,module,exports){
'use strict';

var isString = require('./string');

var CONTAINS_ONLY_WHITESPACES = /^\s*$/;

/**
 * Checks whether a value is empty string or contains only whitespaces
 *
 * @function blank
 *
 * @example
 * var is = require('predicates');
 *
 * is.blank(''); // true
 * is.blank('    '); // true
 * is.blank('test'); // false
 *
 * @param {String} value
 * @returns {Boolean}
 */
module.exports = function isBlank(value) {
    return isString(value) && (value === '' || CONTAINS_ONLY_WHITESPACES.test(value));
};

},{"./string":51}],8:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is a boolean
 *
 * **Aliases** _bool_
 *
 * @function boolean
 *
 * @example
 * var is = require('predicates');
 *
 * is.boolean(true); // true
 * is.boolean(false);; // true
 * is.boolean(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isBoolean(value) {
    return typeof value === 'boolean' || Object.prototype.toString.call(value) === '[object Boolean]';
};

},{}],9:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is a Date object
 *
 * @function date
 *
 * @example
 * var is = require('predicates');
 *
 * is.date(new Date()); true
 * is.date(1415402574000); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
};

},{}],10:[function(require,module,exports){
'use strict';

var isUndefined = require('./undefined');

/**
 * Checks whether a value is not undefined - in other words, is defined
 *
 * @function defined
 *
 * @example
 * var is = require('predicates');
 *
 * is.defined(''); // true
 * is.defined(1); // true
 * is.defined(undefined); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isDefined(value) {
    return !isUndefined(value);
};

},{"./undefined":55}],11:[function(require,module,exports){
'use strict';

var divisibleWithRemainder = require('./divisibleWithRemainder');

/**
 * Checks whether a value is a number and it's divisible by divisor
 *
 * **Aliases** _divisibleBy_, _divBy_
 *
 * @function divisible
 *
 * @example
 * var is = require('predicates');
 *
 * is.divisible(7, 14); // true
 * is.divisible(7)(14); // true
 * is.divisible(7, 10); // false
 *
 * @param {Number} divisor
 * @param {Number} [value]
 * @throws {Error} if the divisor is 0
 * @throws {TypeError} if the divisor is not a finite number
 * @returns {(Boolean|Predicate)} returns bool if at least 2 arguments provided, otherwise a predicate
 */
module.exports = function divisible() {
    var args = Array.prototype.slice.call(arguments);
    args.splice(1, 0, 0);
    return divisibleWithRemainder.apply(this, args);
};
},{"./divisibleWithRemainder":12}],12:[function(require,module,exports){
'use strict';

var handleCurry = require('./utils/handleCurry'),
    isFinitePredicate = require('./finite'),
    isNumber = require('./number');

/**
 * Checks whether a value is a number and it's divisible by divisor with given remainder
 * In other words value % div === remainder
 *
 * **Aliases** _divisibleByWithRemainder_, _divByWithRemainder_
 *
 * @function divisibleWithRemainder
 *
 * @example
 * var is = require('predicates');
 *
 * is.divisibleWithRemainder(3, 2, 5); // true since 5%3 === 2
 * is.divisibleWithRemainder(3, 2)(5); // true
 * is.divisibleWithRemainder(3, 1, 5); // false since 5%3 !== 1
 *
 * var isEven = is.divisibleWithRemainder(2, 1);
 *
 * isEven(1); // true
 * isEven(2); // false
 * isEven(3); // true
 *
 * *
 * @param {Number} divisor
 * @param {Number} remainder
 * @param {Number} [value]
 * @throws {Error} if less than 2 arguments provided
 * @throws {Error} if the divisor is 0
 * @throws {Error} if the remainder is greater than the divisor
 * @throws {TypeError} if the divisor is not a finite number
 * @throws {TypeError} if the remainder is not a finite number
 * @returns {(Boolean|Predicate)} returns bool if at least 3 arguments provided, otherwise a predicate
 */
module.exports = function divisibleWithRemainder(divisor, remainder) {
    if (arguments.length < 2) {
        throw new Error('Missing remainder');
    }

    if (!isFinitePredicate(divisor)) {
        throw new TypeError('Divisor is not a finite number');
    }

    if (divisor === 0) {
        throw new Error('Divisor cannot be 0');
    }

    if (!isFinitePredicate(remainder)) {
        throw new TypeError('Remainder is not a finite number');
    }

    if (remainder >= divisor) {
        throw new Error('Remainder cannot be greater than divisor');
    }

    return handleCurry.call(this, arguments, function isDivisibleByWithRemainderTest(value) {
        return isNumber(value) && value % divisor === remainder;
    }, 2);
};
},{"./finite":18,"./number":40,"./utils/handleCurry":58}],13:[function(require,module,exports){
/*eslint eqeqeq: 0*/
'use strict';

var isArrayLike = require('./arrayLike'),
    isObject = require('./object'),
    isString = require('./string');

/**
 * Checks whether a value is empty
 * Value is empty when:
 * * is an array like object with length === 0
 * * is an object without enumerable properties
 * * is an empty string
 *
 * @function empty
 *
 * @example
 * var is = require('predicates');
 *
 * is.empty(''); // true
 * is.empty([]); // true
 * is.empty({}); // true
 * is.empty([1]); // false
 * is.empty('test'); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isEmpty(value) {
    if (isArrayLike(value)) {
        return value.length === 0;
    } else if (isObject(value)) {
        return Object.keys(value).length === 0;
    } else if (isString(value)) {
        return value == '';
    }
    return false;
};

},{"./arrayLike":5,"./object":41,"./string":51}],14:[function(require,module,exports){
'use strict';

var isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a string ends with a given suffix
 *
 * @function endsWith
 *
 * @example
 * var is = require('predicates');
 *
 * var isYelling = is.endsWith('!');
 *
 * isYelling('shut up!'); // true
 * // same as
 * is.endsWith('!', 'shut up!'); // true
 * isYelling('be quiet please'); // false
 *
 * @param {String} suffix
 * @param {String} [value]
 * @throws {TypeError} if suffix is not a string
 * @throws {Error} if suffix is empty
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function endsWith(suffix) {
    if (!isString(suffix)) {
        throw new TypeError('Suffix must be a string');
    }
    if (suffix === '') {
        throw new Error('Suffix cannot be empty');
    }

    return handleCurry.call(this, arguments, function endsWithPredicate(value) {
        return isString(value) && value.indexOf(suffix) === value.length - suffix.length;
    });
};
},{"./string":51,"./utils/handleCurry":58}],15:[function(require,module,exports){
/*eslint eqeqeq: 0*/
'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether values are equal (using == operator)
 *
 * **Aliases** _equalTo_, _eq_
 * @function equal
 *
 * @example
 * var is = require('predicates');
 *
 * var isTimmy = is.equal('Timmy');
 *
 * isTimmy('Timmy'); // true
 * // same as
 * is.equal('Timmy', 'Timmy'); // true
 * is.equal(1, '1'); // true
 * isTimmy('Franko'); // false
 *
 * @param {*} expected
 * @param {*} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isEqual(expected) {
    return handleCurry.call(this, arguments, function isEqualPredicate(value) {
        return expected == value;
    });
};

},{"./utils/handleCurry":58}],16:[function(require,module,exports){
/*eslint eqeqeq: 0*/
'use strict';

var isBoolean = require('./boolean');
/**
 * Checks whether a value is false a boolean false
 *
 * @function false
 *
 * @example
 * var is = require('predicates');
 *
 * is.false(false); // true
 * is.false(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 * @name false
 */
module.exports = function isFalse(value) {
    return value === false || (isBoolean(value) && value == false);
};

},{"./boolean":8}],17:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is falsy
 *
 * **Aliases** _falsey_
 *
 * @function falsy
 *
 * @example
 * var is = require('predicates');
 *
 * is.falsy(0); // true
 * is.falsy(false); // true
 * is.falsy(1); // false
 *
 * @param {*} value
 * @returns {Boolean}
 *
 */
module.exports = function isFalsy(value) {
    return !value;
};

},{}],18:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is a number and it's finite
 *
 * @function finite
 *
 * @example
 * var is = require('predicates');
 *
 * is.finite(1); // false
 * is.finite(Infinity); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = require('./finite/native') || require('./finite/polyfill');

},{"./finite/native":19,"./finite/polyfill":20}],19:[function(require,module,exports){
'use strict';

module.exports = Number.isFinite;

},{}],20:[function(require,module,exports){
'use strict';

var isNumber = require('../number');

module.exports = function isFinitePolyfill(value) {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
};

},{"../number":40}],21:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is a function
 *
 * **Aliases** _func_, _fn_
 * @function function
 *
 * @example
 * var is = require('predicates');
 *
 * is.function(function() {}); // true
 * is.function(alert); // true
 * is.function('alert'); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
};


},{}],22:[function(require,module,exports){
'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is greater than expected number
 *
 * **Aliases** _greater_, _gt_
 * @function greaterThan
 *
 * @example
 * var is = require('predicates');
 *
 * var isGreaterThan0 = is.greaterThan(0);
 *
 * isGreaterThan0(10); // true
 * // same as
 * is.greaterThan(0, 10); // true
 * isGreaterThan0(-1); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isGreaterThan(expected) {
    return handleCurry.call(this, arguments, function isGreaterThanPredicate(value) {
        return value > expected;
    });
};

},{"./utils/handleCurry":58}],23:[function(require,module,exports){
'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is greater or equal to expected number
 *
 * **Aliases** _greaterOrEqual_, _greaterEq_, _gtEq_
 *
 * @function greaterThanOrEqual
 *
 * @example
 * var is = require('predicates');
 *
 * var isAdultAge = is.greaterThanOrEqual(18);
 *
 * isAdultAge(22); // true
 * // same as
 * is.greaterThanOrEqual(18, 22);
 *
 * isAdultAge(16); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isGreaterThanOrEqual(expected) {
    return handleCurry.call(this, arguments, function isGreaterThanOrEqualPredicate(value) {
        return value >= expected;
    });
};

},{"./utils/handleCurry":58}],24:[function(require,module,exports){
'use strict';

var isObject = require('./object'),
    isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether an object has own property
 *
 * **Aliases** _hasOwn_
 *
 * @function hasOwnProperty
 *
 * @example
 * var is = require('predicates');
 *
 * var isCustomized = is.hasOwnProperty('delay');
 *
 * var Timer = function() {};
 * Timer.prototype.delay = 100;
 *
 * var timer1 = new Timer();
 * var timer2 = new Timer();
 * timer1.delay = 1000;
 *
 * isCustomized(timer1) // true
 * // same as
 * is.hasOwnProperty('delay', timer1); // true
 *
 * isCustomized(timer2); // false
 *
 * @param {String} property
 * @param {Object} [object]
 * @throws {TypeError} if property is not a string
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function hasOwnProperty(property) {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments, function hasOwnPropertyPredicate(object) {
        return isObject(object) && Object.prototype.hasOwnProperty.call(object, property);
    });
};
},{"./object":41,"./string":51,"./utils/handleCurry":58}],25:[function(require,module,exports){
'use strict';

var isObject = require('./object'),
    isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether an object has a given property
 *
 * **Aliases** _has_
 *
 * @function hasProperty
 *
 * @example
 * var is = require('predicates');
 *
 * var isDuck = is.hasProperty('quack');
 *
 * isDuck({quack: ':)'}); // true
 * // same as
 * is.hasProperty('quack', {quack: ':)'}); // true
 *
 * isDuck({type: 'car'}); // false
 *
 * @param {String} property
 * @param {Object} [object]
 * @throws {TypeError} if property is not a string
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function hasProperty(property) {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments, function hasPropertyPredicate(object) {
        return isObject(object) && property in object;
    });
};

},{"./object":41,"./string":51,"./utils/handleCurry":58}],26:[function(require,module,exports){
'use strict';

var isArray = require('./array'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value exists in collection
 * Values are compared using === operator
 *
 * @function in
 *
 * @example
 * var is = require('predicates');
 *
 * var isImage = is.in(['image/gif', 'image/jpeg']);
 * // same as
 * // var isImage = is.oneOf('image/gif', 'image/jpeg');
 *
 * isImage('image/jpeg'); // true
 * // same as
 * is.in(['image/gif', 'image/jpeg'], 'image/jpeg'); // true
 *
 * isImage('text/html'); // false
 *
 * @param {Array} collection of allowed values
 * @param {*} [value]
 * @throws {TypeError} if collection is not an array
 * @throws {Error} if collection is empty
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isIn(collection) {
    if (!isArray(collection)) {
        throw new TypeError('Collection must be an array');
    }

    if (collection.length === 0) {
        throw new Error('Collection cannot be empty');
    }

    return handleCurry.call(this, arguments, function isInPredicate(value) {
        return collection.indexOf(value) !== -1;
    });
};

},{"./array":4,"./utils/handleCurry":58}],27:[function(require,module,exports){
'use strict';

var handleCurry = require('./utils/handleCurry'),
    isFunction = require('./function');

/**
 * Checks whether a value is an instance of given "class"
 *
 * **Aliases** _instance_
 *
 * @function instanceOf
 *
 * @example
 * var is = require('predicates');
 *
 * var Duck = function() {};
 * var Car = function() {};
 *
 * var isDuck = is.instanceOf(Duck);
 *
 * isDuck(new Duck); // true
 * // same as
 * is.instanceOf(Duck, new Duck); // true
 *
 * isDuck(new Car); // false
 *
 *
 * @param {Function} clazz
 * @param {*} [value]
 * @throws {TypeError} if class is not a function
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isInstanceOf(clazz) {
    if (!isFunction(clazz)) {
        throw new TypeError('Class must be a function');
    }
    return handleCurry.call(this, arguments, function isInstanceOfPredicate(value) {
        return value instanceof clazz;
    });
};

},{"./function":21,"./utils/handleCurry":58}],28:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is an integer
 *
 * **Aliases** _int_
 *
 * @function integer
 *
 * @example
 * var is = require('predicates');
 *
 * is.integer(10); // true
 * is.integer(10.4); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = require('./integer/native') || require('./integer/polyfill');

},{"./integer/native":29,"./integer/polyfill":30}],29:[function(require,module,exports){
'use strict';

module.exports = Number.isInteger;

},{}],30:[function(require,module,exports){
'use strict';

var isFinitePredicate = require('../finite');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
module.exports = function isIntegerPolyfill(value) {
    return isFinitePredicate(value) && value > -9007199254740992 && value < 9007199254740992 && Math.floor(value) === value;
};

},{"../finite":18}],31:[function(require,module,exports){
'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is less than expected number
 *
 * **Aliases** _less_, _lt_
 *
 * @function lessThan
 *
 * @example
 *
 * var isChildAge = is.lessThan(18);
 *
 * isChildAge(10); // true
 * // same as
 * is.lessThan(18, 10); // true
 * isChildAge(18); // false
 * isChildAge(22); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isLessThan(expected) {
    return handleCurry.call(this, arguments, function isLessThanPredicate(value) {
        return value < expected;
    });
};

},{"./utils/handleCurry":58}],32:[function(require,module,exports){
'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is less or equal to expected number
 *
 * **Aliases** _lessOrEqual_, _lessEq_, _ltEq_
 *
 * @function lessThanOrEqual
 *
 * @example
 * var is = require('predicates');
 *
 * var isChildAge = is.lessThanOrEqual(17);
 *
 * isChildAge(10); // true
 * // same as
 * is.lessThanOrEqual(17, 10); // true
 *
 * isChildAge(18); // false
 *
 * @param {Number} expected
 * @param {Number} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isLessThanOrEqual(expected) {
    return handleCurry.call(this, arguments, function isLessThanOrEqualPredicate(value) {
        return value <= expected;
    });
};

},{"./utils/handleCurry":58}],33:[function(require,module,exports){
'use strict';

var isRegexp = require('./regexp'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value matches a regexp
 *
 * **Aliases** _match_
 *
 * @function matches
 *
 * @example
 * var is = require('predicates');
 *
 * var isWindows9x = is.matches(/^Windows 9/);
 *
 * isWindows9x('Windows 9'); // true - :D
 * // same as
 * is.matches(/^Windows 9/, 'Windows 9'); // also true - hue hue
 *
 * isWindows9x('Windows 10); // false
 *
 * @param {RegExp} regexp
 * @param {String} [value]
 * @throws {TypeError} if regexp is not a regexp
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function matches(regexp) {
    if (!isRegexp(regexp)) {
        throw new TypeError('Regexp must be a RegExp object');
    }

    return handleCurry.call(this, arguments, function matchesPredicate(value) {
        return regexp.test(value);
    });
};

},{"./regexp":48,"./utils/handleCurry":58}],34:[function(require,module,exports){
'use strict';

var isNumber = require('./number');
/**
 * Checks whether a value is a NaN number
 *
 * **Aliases** _nan_
 * @function NaN
 *
 * @example
 * var is = require('predicates');
 *
 * is.NaN(NaN); // true
 * is.NaN(10); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isNotANumber(value) {
    return isNumber(value) && isNaN(value);
};
},{"./number":40}],35:[function(require,module,exports){
'use strict';

var isNumber = require('./number');

/**
 * Checks whether a value is a negative number
 *
 * @function negative
 *
 * @example
 * var is = require('predicates');
 *
 * is.negative(-1); // true
 * is.negative(0); // false
 *
 * @param {Number} value
 * @returns {Boolean}
 */
module.exports = function isNegativeNumber(value) {
    return isNumber(value) && value < 0;
};

},{"./number":40}],36:[function(require,module,exports){
'use strict';

var isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Negates result of a predicate
 *
 * **Aliases** _negate_
 *
 * @function not
 *
 * @example
 * var is = require('predicates');
 *
 * var isNotEmpty = is.not(is.empty);
 * isNotEmpty([1, 2]);// true
 * // same as
 * is.not(is.empty, [1, 2]); // true
 * isNotEmpty(''); // false
 *
 * @param {Predicate} predicate
 * @param {*} [value]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isNot(predicate) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function isNotPredicateNegation() {
        return !predicate.apply(this, arguments);
    });
};

},{"./function":21,"./utils/handleCurry":58}],37:[function(require,module,exports){
'use strict';

var isString = require('./string');

var CONTAINS_AT_LEAST_ONE_NON_WHITESPACE = /\S/;

/**
 * Checks whether a value is a string and contains at least one non-whitespace character
 *
 * @function notBlank
 *
 * @example
 * var is = require('predicates');
 *
 * is.notBlank(''); // false
 * is.notBlank('    '); // false
 * is.notBlank('test'); // true
 * is.notBlank({toString: function() { return 'test'; }}); // false - since it's not a string
 *
 * @param {String} value
 * @returns {Boolean}
 */
module.exports = function notBlank(value) {
    return isString(value) && CONTAINS_AT_LEAST_ONE_NON_WHITESPACE.test(value);
};
},{"./string":51}],38:[function(require,module,exports){
'use strict';
var isEmpty = require('./empty'),
    not = require('./not');

/**
 * Checks whether value is not empty.
 *
 * See [empty](#empty) for list of conditions that determine when a value is empty
 *
 * @function notEmpty
 *
 * @example
 * var is = require('predicates');
 *
 * is.notEmpty([1]); // true
 * is.notEmpty('value'); // true
 * is.notEmpty([]); // false
 * is.notEmpty(''); // false
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = not(isEmpty);
},{"./empty":13,"./not":36}],39:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is null
 *
 * @function null
 *
 * @example
 * var is = require('predicates');
 *
 * is.null(null); // true
 * is.null({}); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isNull(value) {
    return value === null;
};

},{}],40:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is a number
 *
 * **Aliases** _num_
 *
 * @function number
 *
 * @example
 * var is = require('predicates');
 *
 * is.number(10); // true
 * is.number('10'); // false
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
};

},{}],41:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is an object
 *
 * **Aliases** _obj_
 *
 * @function object
 *
 * @example
 * var is = require('predicates');
 *
 * is.object({}); // true
 * is.object('object'); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isObject(value) {
    return value instanceof Object || (typeof value === 'object' && value !== null);
};
},{}],42:[function(require,module,exports){
'use strict';

var isObject = require('./object'),
    isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether every enumerable property of object satisfies a predicate
 *
 * **Aliases** _objOf_
 *
 * @function objectOf
 *
 * @example
 * var is = require('predicates');
 *
 * var isObjectOfStrings = is.objectOf(is.string);
 *
 * isObjectOfStrings({key: 'value', key1: 'value'}); // true
 * // same as
 * is.objectOf(is.string, {key: 'value', key1: 'value'}); // true
 *
 * isObjectOfStrings({key: 1, key1: 'value'}); // false
 *
 * @param {Predicate} predicate
 * @param {Object} [object]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isObjectOf(predicate) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function isObjectOfPredicate(object) {
        var args = Array.prototype.slice.call(arguments, 1);
        return isObject(object) && Object
            .keys(object)
            .every(function isObjectOfPredicateTestingProperty(key) {
                return predicate.apply(this, [object[key]].concat(args));
            }, this);
    });
};

},{"./function":21,"./object":41,"./utils/handleCurry":58}],43:[function(require,module,exports){
'use strict';
/**
 * Returns a function that checks whether a value is equal to one of allowed values
 * Function compares values using === operator
 *
 * @function oneOf
 *
 * @example
 * var is = require('predicates');
 *
 * var isAllowedToAccess = is.oneOf('ROLE_ADMIN', 'ROLE_USER');
 * // same as
 * // var isAllowedToAccess = is.in(['ROLE_ADMIN', 'ROLE_USER']);
 *
 * isAllowedToAccess('ROLE_ADMIN'); // true
 * isAllowedToAccess('ROLE_ANONYMOUS'); // false
 *
 * @param {...*} allowedValue
 * @throws {Error} if 0 or 1 allowed value provided
 * @returns {Predicate}
 */
module.exports = function isOneOf() {
    var allowedValues = Array.prototype.slice.call(arguments);

    if (allowedValues.length < 2) {
        throw new Error('At least 2 allowed values are required');
    }

    return function isOneOfPredicate(value) {
        return allowedValues.indexOf(value) !== -1;
    };
};

},{}],44:[function(require,module,exports){
'use strict';

var isObject = require('./object');

/**
 * Checks whether a value is a plain object.
 * Plain object is an object which prototype is Object.prototype or null
 *
 * @function plainObject
 *
 * @example
 * var is = require('predicates');
 *
 * is.plainObject({property: 'value'}); // true
 * is.plainObject(new Object); // true
 * is.plainObject(Object.create(null)); // true
 * is.plainObject(new String('test')); // false
 *
 * var Foo = function() {};
 * is.plainObject(new Foo); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
module.exports = function isPlainObject(value) {
    if (!isObject(value)) {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
};
},{"./object":41}],45:[function(require,module,exports){
'use strict';

var isNumber = require('./number');

/**
 * Checks whether a value is a positive number
 *
 * @function positive
 *
 * @example
 * var is = require('predicates');
 *
 * is.positive(10); // true
 * is.positive(-1); // false
 *
 * @param {Number} value
 * @returns {Boolean}
 */
module.exports = function isPositiveNumber(value) {
    return isNumber(value) && value > 0;
};

},{"./number":40}],46:[function(require,module,exports){
'use strict';

var isString = require('./string'),
    isNumber = require('./number'),
    isBoolean = require('./boolean'),
    isUndefined = require('./undefined'),
    isNull = require('./null'),
    isObject = require('./object');

/**
 * Checks whether a value is a primitive.
 *
 * Helpful links:
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 * * http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
 *
 * NOTE! A primitive value wrapped by a corresponding object is not a primitive anymore
 * ```js
 * var a = 'test' // this is a primitive
 * a = new String('test'); // and this is not a primitive
 * ```
 *
 * @function primitive
 *
 * @example
 * var is = require('predicates');
 *
 * is.primitive('test'); // true
 * is.primitive(undefined); // true
 * is.primitive(10); // true
 * is.primitive(null); // true
 * is.primitive(false); // true
 *
 * is.primitive(new Number(10)); // false
 * is.primitive(new String('test')); // false
 * is.primitive(new Boolean(true)); // false
 * is.primitive({}); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isPrimitive(value) {
    return !isObject(value) && (isString(value) || isNumber(value) || isBoolean(value) || isUndefined(value) || isNull(value));
};
},{"./boolean":8,"./null":39,"./number":40,"./object":41,"./string":51,"./undefined":55}],47:[function(require,module,exports){
'use strict';

var isObject = require('./object'),
    isFunction = require('./function'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value of given property of an object satisfies a predicate
 *
 * If you need to check more properties at a time use {@link structure}.
 *
 * NOTE! Provided predicate will be called ALWAYS if a provided value is an object.
 *
 * **Aliases** _prop_
 *
 * @function property
 *
 * @example
 * var is = require('predicates');
 *
 * is.property('name', is.string, {name: 'Tommy'}); // true
 * is.property('name', is.string)({name: 'Tommy'}); // true
 * is.property('name', is.string, {name: 2}); // false - since 2 is not a string
 * is.property('name', is.string, {}); // false - since undefined is not a string
 *
 * @param {*} propertyName
 * @param {Predicate} predicate
 * @param {Object} [value]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @throws {TypeError} if predicate is not a function
 * @throws {Error} if too few arguments provided
 * @return {(Boolean|Predicate)} boolean if at least 3 arguments provided, otherwise a predicate
 */
module.exports = function property(propertyName, predicate) {
    if (arguments.length < 2) {
        throw new Error('Too few arguments - 2 required');
    }

    if (!isFunction(predicate)) {
        throw new TypeError('Predicate is not a function');
    }

    return handleCurry.call(this, arguments, function isPropertySatisfiesPredicateTest(value) {
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1, value[propertyName]);
        return isObject(value) && predicate.apply(this, args);
    }, 2);
};
},{"./function":21,"./object":41,"./utils/handleCurry":58}],48:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is a regexp
 *
 * **Aliases** _regexp_
 *
 * @function regExp
 *
 * @example
 * var is = require('predicates');
 *
 * is.regExp(/t/); // true
 * is.regExp(new RegExp(/t/)); // true
 * is.regExp('.*'); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isRegexp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
};

},{}],49:[function(require,module,exports){
'use strict';
var isString = require('./string'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a string starts with a given prefix
 *
 * @function startsWith
 *
 * @example
 * var is = require('predicates');
 *
 * var isProfessor = is.startsWith('Prof. ');
 * isProfessor('Prof. Bend Ovah'); // true
 * // same as
 * is.startsWith('Prof. ', 'Prof. Bend Ovah'); // true
 *
 * isProfessor('Dr. Here U\' Are'); // false
 *
 * @param {String} prefix
 * @param {String} [value]
 * @throws {TypeError} if prefix is not a string
 * @throws {Error} if prefix is empty
 * @returns {(Boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function startsWith(prefix) {
    if (!isString(prefix)) {
        throw new TypeError('Prefix must be a string');
    }
    if (prefix === '') {
        throw new Error('Prefix cannot be empty');
    }

    return handleCurry.call(this, arguments, function startsWithPredicate(value) {
        return isString(value) && value.indexOf(prefix) === 0;
    });
};

},{"./string":51,"./utils/handleCurry":58}],50:[function(require,module,exports){
'use strict';

var handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is strictly equal to expected value (uses === operator)
 *
 * **Aliases** _strictEqualTo_
 *
 * @function strictEqual
 *
 * @example
 * var is = require('predicates');
 *
 * var mom = {};
 * var isMyMom = is.strictEqual(mom);
 *
 * isMyMom(mom); // true - mom is only one. Remember about it...
 * // same as
 * is.strictEqual(mom, mom); // true
 * isMyMom({}); // false
 *
 *
 * @param {*} expected
 * @param {*} [value]
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
module.exports = function isStrictEqual(expected) {
    return handleCurry.call(this, arguments, function isStrictEqualPredicate(value) {
        return expected === value;
    });
};

},{"./utils/handleCurry":58}],51:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is a function
 *
 * **Aliases** _str_
 *
 * @function string
 *
 * @example
 * var is = require('predicates');
 *
 * is.string('test'); // true
 * is.string({}); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isString(value) {
    return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
};

},{}],52:[function(require,module,exports){
'use strict';

var isObject = require('./object'),
    handleCurry = require('./utils/handleCurry'),
    objectOf = require('./objectOf'),
    isFunction = require('./function');

var isObjectOfPredicates = objectOf(isFunction);

/**
 * Checks whether an object satisfies predicates defined in structure
 *
 * NOTE: All predicates defined in structure must be satisfied.
 * If some of the properties are optional use [undefinedOr](#undefinedOr)
 *
 * You shouldn't use this function to validate input from the user and expect complex report "what's wrong with this is object".
 * There are few reasons for that:
 * * it's just a predicate (that returns only true or false)
 * * breaks [the design rule](design.md#user-content-defined-and-generated-predicates-will-not-throw-any-errors)
 *
 * See examples for inspiration how you can use _structure_
 *
 * @function structure
 *
 * @example
 * // simple object matching
 * var is = require('predicates');
 *
 * var schema = {
 *      name: is.string, // only string
 *      phone: is.or(is.string, is.number), // string or number
 *      surname: is.undefinedOr(is.string) // optional
 * },
 *     isPerson = is.structure(schema);
 *
 * var person = {name: 'Tommy', phone: 80129292};
 * isPerson(person); // true
 * // same as
 * is.structure(schema, person); // true
 * isPerson({name: 'Tommy'});
 *
 * @example
 * // filtering
 * var is = require('predicates');
 *
 * var people = [
 *  {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
 *  {name: 'Dr. Supa Kaki', age: 34, sex: 'female'},
 *  {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
 * ];
 *
 * var professors = people.filter(is.structure({
 *  name: is.startsWith('Prof.')
 * }));
 *
 * // [
 * //   {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
 * //   {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
 * // ]
 *
 * @example
 * // duck typing
 *
 * var isDuck = is.structure({
 *  quack: is.function,
 *  walk: is.function
 * });
 *
 * isDuck({
 *    say: function() { return 'woof! woof!';
 * }}); // not a duck
 *
 * isDuck({
 *    quack: function() { return 'quack!'; },
 *    walk: function() { return 'tup tup tup'; }
 * }); // yep, it's a duck
 *
 * @param {Object} structure
 * @param {Object} [value]
 * @param {...*} [additionalArgs] additional arguments passed to the predicates
 * @return {(Boolean|Predicate)} returns bool if more than 1 argument provided, otherwise a predicate
 */
module.exports = function isStructure(structure) {
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
        var args = Array.prototype.slice.call(arguments, 1);
        return isObject(value) && keys.every(function structurePredicateTestingProperty(key) {
            return structure[key].apply(this, [value[key]].concat(args));
        }, this);
    });
};

},{"./function":21,"./object":41,"./objectOf":42,"./utils/handleCurry":58}],53:[function(require,module,exports){
/*eslint eqeqeq:0*/
'use strict';

var isBoolean = require('./boolean');
/**
 * Checks whether a value is a boolean true
 *
 * @function true
 *
 * @example
 * var is = require('predicates');
 *
 * is.true(true); // true
 * is.true('true'); // false
 *
 * @param {Boolean} value
 * @returns {Boolean}
 */
module.exports = function isTrue(value) {
    return value === true || (isBoolean(value) && value == true);
};
},{"./boolean":8}],54:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is truthy
 *
 * @function truthy
 *
 * @example
 * var is = require('predicates');
 *
 * is.truthy(true); // true
 * is.truthy(1); // true
 * is.truthy(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isTruthy(value) {
    return !!value;
};

},{}],55:[function(require,module,exports){
'use strict';

/**
 * Checks whether a value is undefined
 *
 * @function undefined
 *
 * @example
 * var is = require('predicates');
 *
 * is.undefined(undefined); // true
 * is.undefined(0); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isUndefined(value) {
    return typeof value === 'undefined';
};

},{}],56:[function(require,module,exports){
'use strict';

var isFunction = require('./function'),
    isUndefined = require('./undefined'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether a value is undefined or satisfies given predicate
 * Very useful to check optional arguments of function.
 *
 * @function undefinedOr
 *
 * @example
 * var is = require('predicates');
 *
 * var isUndefinedOrString = is.undefinedOr(is.string);
 *
 * isUndefinedOrString(undefined); // true
 * isUndefinedOrString('test'); // true
 * // same as
 * is.undefinedOr(is.string, undefined); // true
 * is.undefinedOr(is.string, 'test'); // true
 *
 * isUndefinedOrString({}); // false
 *
 * @param {Predicate} predicate
 * @param {*} [value]
 * @returns {(Boolean|Predicate)} returns bool if more than 1 argument provided, otherwise a predicate
 */
module.exports = function isUndefinedOrSatisfiesPredicate(predicate) {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    return handleCurry.call(this, arguments, function isUndefinedOrSatisfiedPredicate(value) {
        return isUndefined(value) || predicate.apply(this, arguments);
    });
};

},{"./function":21,"./undefined":55,"./utils/handleCurry":58}],57:[function(require,module,exports){
'use strict';

var isFunction = require('../function'),
    isArrayOf = require('../arrayOf');

module.exports = function assertPredicates(predicates) {
    if (!isArrayOf(isFunction, predicates)) {
        throw new TypeError('Every predicate must be a function');
    }
    if (predicates.length < 2) {
        throw new Error('You need to provide at least two predicates');
    }
};

},{"../arrayOf":6,"../function":21}],58:[function(require,module,exports){
'use strict';

module.exports = function handleCurry(args, func, valueIndex) {
    valueIndex = valueIndex || 1;
    return args.length > valueIndex ? func.apply(this, Array.prototype.slice.call(args, valueIndex)) : func;
};

},{}]},{},[1])(1)
});
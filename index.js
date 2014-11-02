'use strict';

/**
 * A function that returns true or false based on input arguments
 *
 * @typedef {Function} Predicate
 * @param {...*} arg
 * @return {Boolean}
 */

exports.all = require('./src/all');
exports.any = exports.some = require('./src/any');
exports.array = require('./src/array');
exports.arrayLike = require('./src/arrayLike');
exports.arrayOf = exports.arrOf = require('./src/arrayOf');
exports.blank = require('./src/blank');
exports.boolean = exports.bool = require('./src/boolean');
exports.date = require('./src/date');
exports.defined = require('./src/defined');
exports.empty = require('./src/empty');
exports.equal = exports.equalTo = require('./src/equal');
exports.false = require('./src/false');
exports.falsy = exports.falsey = require('./src/falsy');
exports.function = exports.fn = exports.func = require('./src/function');
exports.finite = require('./src/finite');
exports.greaterThan = exports.greater = exports.gt = require('./src/greaterThan');
exports.greaterThanOrEqual = exports.greaterOrEqual = exports.greaterEq = exports.gtEq = require('./src/greaterThanOrEqual');
exports.hasOwnProperty = exports.hasOwn = require('./src/hasOwnProperty');
exports.hasProperty = exports.has = require('./src/hasProperty');
exports.instanceof = exports.instance = require('./src/instanceOf');
exports.in = require('./src/in');
exports.integer = exports.int = require('./src/integer');
exports.lessThan = exports.less = exports.lt = require('./src/lessThan');
exports.lessThanOrEqual = exports.lessOrEqual = exports.lessEq = exports.ltEq = require('./src/lessThanOrEqual');
exports.matches = exports.match = require('./src/matches');
exports.notANumber = exports.nan = exports.NaN = require('./src/nan');
exports.negative = require('./src/negative');
exports.not = exports.negate = require('./src/not');
exports.null = require('./src/null');
exports.number = exports.num = require('./src/number');
exports.object = exports.obj = require('./src/object');
exports.objectOf = require('./src/objectOf');
exports.oneOf = require('./src/oneOf');
exports.positive = require('./src/positive');
exports.regexp = exports.regExp = require('./src/regexp');
exports.strictEqual = exports.strictEqualTo = require('./src/strictEqual');
exports.strict = exports.str = require('./src/string');
exports.structure = require('./src/structure');
exports.true = require('./src/true');
exports.truthy = require('./src/truthy');
exports.undefined = require('./src/undefined');
exports.undefinedOr = require('./src/undefinedOr');

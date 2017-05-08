import all = require('./all');
import any = require('./any');
import array = require('./array');
import arrayLike = require('./arrayLike');
import arrayOf = require('./arrayOf');
import blank = require('./blank');
import boolean = require('./boolean');
import date = require('./date');
import defined = require('./defined');
import divisible = require('./divisible');
import divisibleWithRemainder = require('./divisibleWithRemainder');
import empty = require('./empty');
import endsWith = require('./endsWith');
import equal = require('./equal');
import isFalse = require('./false');
import falsy = require('./falsy');
import finite = require('./finite');
import isFunction = require('./function');
import greaterThan = require('./greaterThan');
import greaterThanOrEqual = require('./greaterThanOrEqual');
import hasOwnProperty = require('./hasOwnProperty');
import hasProperty = require('./hasProperty');
import isIn = require('./in');
import instanceOf = require('./instanceOf');
import integer = require('./integer');
import lessThan = require('./lessThan');
import lessThanOrEqual = require('./lessThanOrEqual');
import matches = require('./matches');
import notANumber = require('./nan');
import negative = require('./negative');
import not = require('./not');
import notBlank = require('./notBlank');
import isNull = require('./null');
import isNumber = require('./number');
import isObject = require('./object');
import objectOf = require('./objectOf');
import oneOf = require('./oneOf');
import plainObject = require('./plainObject');
import positive = require('./positive');
import primitive = require('./primitive');
import property = require('./property');
import regexp = require('./regexp');
import startsWith = require('./startsWith');
import strictEqual = require('./startsWith');
import string = require('./string');
import structure = require('./structure');
import isTrue = require('./true');
import truthy = require('./truthy');
import isUndefined = require('./undefined');
import undefinedOr = require('./undefinedOr');

export {all, all as and};
export {any, any as or};
export {array, array as arr};
export {arrayLike, arrayLike as arrLike};
export {arrayOf, arrayOf as arrOf};
export {blank};
export {boolean, boolean as bool};
export {date};
export {defined};
export {divisible, divisible as divisibleBy, divisible as divBy};
export {divisibleWithRemainder, divisible as divisibleByWithRemainder, divisible as divByWithRemainder};
export {empty};
export {endsWith};
export {equal, equal as equalTo, equal as eq};
export {isFalse as false};
export {falsy, falsy as falsey};
export {finite};
export {isFunction as function, isFunction as fn, isFunction as func};
export {greaterThan, greaterThan as greater, greaterThan as gt};
export {
    greaterThanOrEqual,
    greaterThanOrEqual as greaterOrEqual,
    greaterThanOrEqual as greaterEq,
    greaterThanOrEqual as gtEq
};
export {hasOwnProperty, hasOwnProperty as hasOwn};
export {hasProperty, hasProperty as has};
export {isIn as in};
export {instanceOf, instanceOf as instance};
export {integer, integer as int};
export {lessThan, lessThan as less, lessThan as lt};
export {lessThanOrEqual, lessThanOrEqual as lessOrEqual, lessThanOrEqual as lessEq, lessThanOrEqual as ltEq};
export {matches, matches as match};
export {notANumber, notANumber as nan, notANumber as NaN};
export {negative};
export {not, not as negate};
export {notBlank};
export {isNull as null};
export {isNumber, isNumber as num};
export {isObject as object, isObject as obj};
export {objectOf, objectOf as objOf};
export {oneOf};
export {plainObject};
export {positive};
export {primitive};
export {property, property as prop};
export {regexp, regexp as regExp};
export {startsWith};
export {strictEqual, strictEqual as strictEqualTo};
export {string, string as str};
export {structure, structure as struct};
export {isTrue as true};
export {truthy};
export {isUndefined as undefined};
export {undefinedOr};


// TODO
// not chaining
// better info about returned type - not :Predicate but rather (value: number) => boolean
// and chaining - optional
// isSet
// isMap
// isSymbol
// find other types
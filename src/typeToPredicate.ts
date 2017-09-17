import isString from './string';
import isBoolean from './boolean';
import isNumber from './number';
import {Predicate} from './types';
import isSymbol from './symbol';
import isWeakMap from './weakMap';
import isWeakSet from './weakSet';
import isRegExp from './regexp';
import isObject from './object';
import isFunction from './function';
import isDate from './date';
import isArray from './array';

const find = require('array-find');

const mapping: [Function, Predicate][] = [
    [String, isString],
    [Boolean, isBoolean],
    [Number, isNumber],
    [RegExp, isRegExp],
    [Object, isObject],
    [Function, isFunction],
    [Date, isDate],
    [Array, isArray]
];

if (typeof Symbol !== 'undefined') {
    mapping.push([Symbol, isSymbol]);
}

if (typeof WeakMap !== 'undefined') {
    mapping.push([WeakMap, isWeakMap]);
}

if (typeof WeakSet !== 'undefined') {
    mapping.push([WeakSet, isWeakSet]);
}

/**
 * Finds mapping for given type constructor
 *
 * @param {Function} type
 * @returns {Predicate}
 */
export function getPredicateForType(type: Function): Predicate {
    const result = find(mapping, (entry: [Function, Predicate]) => {
        return entry[0] === type;
    });

    if (result) {
        return result[1];
    }
}
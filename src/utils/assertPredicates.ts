import {Predicate} from "../types";
import isFunction = require('../function');
import isArrayOf = require('../arrayOf');

function assertPredicates(predicates: Predicate[]) {
    if (!isArrayOf(isFunction, predicates)) {
        throw new TypeError('Every predicate must be a function');
    }
    if (predicates.length < 2) {
        throw new Error('You need to provide at least two predicates');
    }
}

export = assertPredicates;
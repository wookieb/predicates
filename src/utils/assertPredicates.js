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

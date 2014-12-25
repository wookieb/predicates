'use strict';

var isArrayOf = require('../src/arrayOf'),
    assert = require('chai').assert;

describe('arrayOf', function() {
    var IS_STRING = function(value) {
        return typeof value === 'string';
    };

    it('returns function if only one argument provided', function() {
        assert.ok(isArrayOf(IS_STRING) instanceof Function);
    });

    it('calls a predicate with the same context and proper arguments', function() {
        var exampleContext = {some: 'property'},
            isArrayOfString = isArrayOf(function(value, additionalArg1, additionalArg2) {
                assert.strictEqual(exampleContext, this);
                assert.ok(value === 1 || value === 2);
                assert.strictEqual(additionalArg1, 'test');
                assert.strictEqual(additionalArg2, 'value');
            });
        isArrayOfString.call(exampleContext, [1, 2], 'test', 'value');
    });

    it('throws a TypeError if predicate is not a function', function() {
        var notFunction = 'definitely not a function';
        assert.throws(function() {
            isArrayOf(notFunction);
        }, TypeError, /must be a function/);
        assert.throws(function() {
            isArrayOf(notFunction)([]);
        }, TypeError, /must be a function/);
    });

    it('returns false if value is not an array', function() {
        assert.ok(isArrayOf(IS_STRING)({}) === false);
    });

    it('returns true if array is empty', function() {
        assert.ok(isArrayOf(IS_STRING)([]));
    });

    it('checks whether every element of an array satisfies a predicate', function() {
        assert.ok(isArrayOf(IS_STRING)(['test', 'array']));
        assert.ok(isArrayOf(IS_STRING)([1, '3']) === false);
    });
});

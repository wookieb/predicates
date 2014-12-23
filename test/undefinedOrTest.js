'use strict';

var undefinedOr = require('../src/undefinedOr'),
    assert = require('assert');

describe('undefinedOr', function() {
    var PREDICATE = function(value) {
            return typeof value === 'string';
        },
        VALID_VALUE = 'string';
    it('returns a function if only one argument provided', function() {
        assert.ok(undefinedOr(PREDICATE) instanceof Function);
    });

    it('throws TypeError if predicate is not a function', function() {
        var NOT_PREDICATE = 'definitely not predicate';
        assert.throws(function() {
            undefinedOr(NOT_PREDICATE)(VALID_VALUE);
        }, TypeError, /must be a function/);

        assert.throws(function() {
            undefinedOr(NOT_PREDICATE);
        }, TypeError, /must be a function/);

        assert.throws(function() {
            undefinedOr(NOT_PREDICATE, VALID_VALUE);
        }, TypeError, /must be a function/);

        assert.doesNotThrow(function() {
            undefinedOr(PREDICATE, VALID_VALUE);
        });
    });

    it('calls the predicate in the same context and forward value arguments', function() {
        var exampleContext = {example: 'context'},
            predicate = function() {
                assert.deepEqual(exampleContext, this);
                assert.strictEqual(arguments[0], 1);
                assert.strictEqual(arguments[1], '2');
                assert.strictEqual(arguments[2], null);
                assert.strictEqual(arguments[3], undefined);
            };

        undefinedOr(predicate).call(exampleContext, 1, '2', null);
        undefinedOr.call(exampleContext, predicate, 1, '2', null);
    });

    it('does not call the predicate if value is undefined', function() {
        var predicate = function() {
            throw new Error('Predicate should not be called');
        };
        undefinedOr(predicate, undefined);
        undefinedOr(predicate)();
        undefinedOr(predicate)(undefined);
    });

    it('checks whether value is undefined or satisfies given predicate', function() {
        assert.ok(undefinedOr(PREDICATE, VALID_VALUE));
        assert.ok(undefinedOr(PREDICATE)(VALID_VALUE));
        assert.ok(undefinedOr(PREDICATE, undefined));
        assert.ok(undefinedOr(PREDICATE)(undefined));
        assert.ok(undefinedOr(PREDICATE)());
        assert.ok(undefinedOr(PREDICATE, 1) === false);
        assert.ok(undefinedOr(PREDICATE)(1) === false);
    });
});

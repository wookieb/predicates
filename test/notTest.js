'use strict';

var not = require('../src/not'),
    assert = require('chai').assert;

describe('not', function() {
    var TRUE_FUNCTION = function() { return true; },
        FALSE_FUNCTION = function() { return false; },
        EXAMPLE_CONTEXT = {some: 'value'};

    it('negates function result', function() {
        assert.ok(not(TRUE_FUNCTION)(1) === false);
        assert.ok(not(FALSE_FUNCTION)(1) === true)
    });

    it('throws TypeError is predicate is not a function', function() {
        assert.throws(function() {
            not('definitely not a function')(1);
        }, TypeError, /must be a function/)
    });

    it('predicate is called with the same context and proper arguments', function() {
        var func = function() {
            assert.strictEqual(this, EXAMPLE_CONTEXT);
            assert.strictEqual(arguments[0], 1);
            assert.strictEqual(arguments[1], 2);
            assert.strictEqual(arguments[2], 3);
            assert.strictEqual(arguments[3], undefined);
            return false;
        };

        assert.ok(not(func).apply(EXAMPLE_CONTEXT, [1, 2, 3]));
        assert.ok(not.apply(EXAMPLE_CONTEXT, [func, 1, 2, 3]));
    });
});

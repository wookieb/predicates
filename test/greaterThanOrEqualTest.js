'use strict';

var isGreaterThanOrEqual = require('../src/greaterThanOrEqual'),
    assert = require('chai').assert;

describe('greaterThanOrEqual', function() {
    it('returns a function if only one argument provided', function() {
        assert.ok(isGreaterThanOrEqual(10) instanceof Function);
    });

    it('returns true if value is greater or equal to expected value', function() {
        assert.ok(isGreaterThanOrEqual(10, 100));
        assert.ok(isGreaterThanOrEqual(10)(100));
        assert.ok(isGreaterThanOrEqual(10, 10));
        assert.ok(isGreaterThanOrEqual(10)(10));
    });

    it('returns false if value is less than expected value', function() {
        assert.ok(isGreaterThanOrEqual(10, 1) === false);
        assert.ok(isGreaterThanOrEqual(10)(1) === false);
    });
});

'use strict';

var isLessThanOrEqual = require('../src/lessThanOrEqual'),
    assert = require('assert');

describe('lessThanOrEqual', function() {
    it('returns another function if only one argument provided', function() {
        assert.ok(isLessThanOrEqual(10) instanceof Function);
    });

    it('returns true if value is less or equal to expected value', function() {
        assert.ok(isLessThanOrEqual(10, 1));
        assert.ok(isLessThanOrEqual(10)(1));
        assert.ok(isLessThanOrEqual(10, 10));
        assert.ok(isLessThanOrEqual(10)(10));
    });

    it('returns false if value is greater or equal to expected value', function() {
        assert.ok(isLessThanOrEqual(10, 100) === false);
        assert.ok(isLessThanOrEqual(10)(100) === false);
    });
});

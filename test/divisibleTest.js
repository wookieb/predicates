'use strict';
var divisible = require('../src/divisible'),
    assert = require('assert');

describe('divisible', function() {
    it('checks whether divisor is a finite number', function() {
        assert.throws(function() {
            divisible('0');
        }, TypeError, /is not a finite number/);
    });

    it('checks whether divisor is not 0', function() {
        assert.throws(function() {
            divisible(0);
        }, Error, /cannot be 0/);
    });

    it('returns a function if only 1 argument provided', function() {
        assert.ok(divisible(10));
    });

    it('checks whether number is divisible by a given divisor', function() {
        assert.ok(divisible(10, 100));
        assert.ok(divisible(10)(100));
        assert.ok(divisible(2, 2));
        assert.ok(divisible(2)(2));

        assert.ok(divisible(10, 4) === false);
        assert.ok(divisible(10)(4) === false);
        assert.ok(divisible(2, 1) === false);
        assert.ok(divisible(2)(1) === false);
    });

    it('returns always false if a tested value is not a number', function() {
        assert.ok(divisible(10, '5') === false);
        assert.ok(divisible(10)('5') === false);
        assert.ok(divisible(10, {}) === false);
        assert.ok(divisible(10)({}) === false);
    });
});
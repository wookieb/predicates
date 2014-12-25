'use strict';
var divisibleWithRemainder = require('../src/divisibleWithRemainder'),
    assert = require('chai').assert;

describe('divisibleWithRemainder', function() {
    it('checks whether the divisor is a finite number', function() {
        assert.throws(function() {
            divisibleWithRemainder('0', 0);
        }, TypeError, /is not a finite number/);
    });

    it('checks whether the divisor is not 0', function() {
        assert.throws(function() {
            divisibleWithRemainder(0, 0);
        }, Error, /cannot be 0/);
    });

    it('checks whether the remainder is a finite number', function() {
        assert.throws(function() {
            divisibleWithRemainder(10, '1');
        }, TypeError, /is not a finite number/);
    });

    it('throws an error when only 1 argument provided', function() {
        assert.throws(function() {
            divisibleWithRemainder(10);
        }, Error, /missing remainder/i);
    });

    it('checks whether the remainder is smaller than the divisor', function() {
        assert.throws(function() {
            divisibleWithRemainder(10, 15);
        }, Error, /Remainder cannot be greater than divisor/);

    });

    it('returns a function if only 2 arguments provided', function() {
        assert.ok(divisibleWithRemainder(10, 5));
    });

    it('checks whether number is divisible by the given divisor with the given remainder', function() {
        assert.ok(divisibleWithRemainder(10, 5, 5));
        assert.ok(divisibleWithRemainder(10, 5)(5));
        assert.ok(divisibleWithRemainder(2, 0, 2));
        assert.ok(divisibleWithRemainder(2, 0)(2));

        assert.ok(divisibleWithRemainder(10, 5, 4) === false);
        assert.ok(divisibleWithRemainder(10, 5)(4) === false);
        assert.ok(divisibleWithRemainder(2, 0, 1) === false);
        assert.ok(divisibleWithRemainder(2, 0)(1) === false);
    });

    it('returns always false if a tested value is not a number', function() {
        assert.ok(divisibleWithRemainder(10, 5, '5') === false);
        assert.ok(divisibleWithRemainder(10, 5)('5') === false);
        assert.ok(divisibleWithRemainder(10, 5, {}) === false);
        assert.ok(divisibleWithRemainder(10, 5)({}) === false);
    });
});
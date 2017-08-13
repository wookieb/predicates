import divisibleWithRemainder from '../src/divisibleWithRemainder';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('divisibleWithRemainder', function () {
    it('checks whether the divisor is a finite number', function () {
        assert.throws(function () {
            divisibleWithRemainder(<any>'0', 0);
        }, TypeError, /is not a finite number/);
    });

    it('checks whether the divisor is not 0', function () {
        assert.throws(function () {
            divisibleWithRemainder(0, 0);
        }, Error, /cannot be 0/);
    });

    it('checks whether the remainder is a finite number', function () {
        assert.throws(function () {
            divisibleWithRemainder(10, <any>'1');
        }, TypeError, /is not a finite number/);
    });

    it('throws an error when only 1 argument provided', function () {
        assert.throws(function () {
            divisibleWithRemainder.apply(this, [10]);
        }, Error, /missing remainder/i);
    });

    it('checks whether the remainder is smaller than the divisor', function () {
        assert.throws(function () {
            divisibleWithRemainder(10, 15);
        }, Error, /Remainder cannot be greater than divisor/);

    });

    it('returns a function if only 2 arguments provided', function () {
        assert.isFunction(divisibleWithRemainder(10, 5));
    });

    it('checks whether number is divisible by the given divisor with the given remainder', function () {
        assert.isTrue(divisibleWithRemainder(10, 5, 5));
        assert.isTrue(divisibleWithRemainder(10, 5)(5));
        assert.isTrue(divisibleWithRemainder(2, 0, 2));
        assert.isTrue(divisibleWithRemainder(2, 0)(2));

        assert.isFalse(divisibleWithRemainder(10, 5, 4));
        assert.isFalse(divisibleWithRemainder(10, 5)(4));
        assert.isFalse(divisibleWithRemainder(2, 0, 1));
        assert.isFalse(divisibleWithRemainder(2, 0)(1));
    });

    it('returns always false if a tested value is not a number', function () {
        assert.isFalse(divisibleWithRemainder(10, 5, <any>'5'));
        assert.isFalse(divisibleWithRemainder(10, 5)('5'));
        assert.isFalse(divisibleWithRemainder(10, 5, <any>{}));
        assert.isFalse(divisibleWithRemainder(10, 5)({}));
    });

    it('description', () => {
        assertDescription(divisibleWithRemainder(10, 5), 'a number divisible by 10 with remainder 5');
    })
});
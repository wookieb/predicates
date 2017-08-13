import divisible from '../src/divisible';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('divisible', function () {
    it('checks whether divisor is a finite number', function () {
        assert.throws(function () {
            divisible(<any>'0');
        }, TypeError, /is not a finite number/);
    });

    it('checks whether divisor is not 0', function () {
        assert.throws(function () {
            divisible(0);
        }, Error, /cannot be 0/);
    });

    it('returns a function if only 1 argument provided', function () {
        assert.isFunction(divisible(10));
    });

    it('checks whether number is divisible by a given divisor', function () {
        assert.isTrue(divisible(10, 100));
        assert.isTrue(divisible(10)(100));
        assert.isTrue(divisible(2, 2));
        assert.isTrue(divisible(2)(2));

        assert.isFalse(divisible(10, 4));
        assert.isFalse(divisible(10)(4));
        assert.isFalse(divisible(2, 1));
        assert.isFalse(divisible(2)(1));
    });

    it('returns always false if a tested value is not a number', function () {
        assert.isFalse(divisible(10, <any>'5'));
        assert.isFalse(divisible(10)('5'));
        assert.isFalse(divisible(10, <any>{}));
        assert.isFalse(divisible(10)({}));
    });

    it('description', () => {
        assertDescription(divisible(10), 'a number divisible by 10 with remainder 0');
    })
});
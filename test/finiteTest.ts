import {assert} from 'chai';
import isFinite from '../src/finite';

describe('finite', function () {

    it('returns false if value is not a number', function () {
        assert.isFalse(isFinite(NaN));
        assert.isFalse(isFinite(''));
        assert.isFalse(isFinite('1'));
    });

    it('returns false if value is infinity', function () {
        assert.isFalse(isFinite(Infinity));
        assert.isFalse(isFinite(-Infinity));
    });

    it('returns true if value is a finite number', function () {
        assert.isTrue(isFinite(1));
        assert.isTrue(isFinite(10.234));
    });
});

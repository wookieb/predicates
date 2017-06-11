import isGreaterThan from '../src/greaterThan';
import {assert} from 'chai';

describe('greaterThan', function () {
    it('returns a function if only one argument provided', function () {
        assert.isFunction(isGreaterThan(10));
    });

    it('returns true if value is greater than expected value', function () {
        assert.isTrue(isGreaterThan(10, 100));
        assert.isTrue(isGreaterThan(10)(100));
    });

    it('returns false if value is less or equal to expected value', function () {
        assert.isFalse(isGreaterThan(10, 1));
        assert.isFalse(isGreaterThan(10)(1));
        assert.isFalse(isGreaterThan(10, 10));
        assert.isFalse(isGreaterThan(10)(10));
    });
});

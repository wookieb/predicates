import isLessThanOrEqual from '../src/lessThanOrEqual';
import {assert} from 'chai';

describe('lessThanOrEqual', () => {
    it('returns another function if only one argument provided', function () {
        assert.isFunction(isLessThanOrEqual(10));
    });

    it('returns true if value is less or equal to expected value', function () {
        assert.isTrue(isLessThanOrEqual(10, 1));
        assert.isTrue(isLessThanOrEqual(10)(1));
        assert.isTrue(isLessThanOrEqual(10, 10));
        assert.isTrue(isLessThanOrEqual(10)(10));
    });

    it('returns false if value is greater or equal to expected value', function () {
        assert.isFalse(isLessThanOrEqual(10, 100));
        assert.isFalse(isLessThanOrEqual(10)(100));
    });
});

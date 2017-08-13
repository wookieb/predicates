import isGreaterThanOrEqual from '../src/greaterThanOrEqual';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('greaterThanOrEqual', function () {
    it('returns a function if only one argument provided', function () {
        assert.isFunction(isGreaterThanOrEqual(10));
    });

    it('returns true if value is greater or equal to expected value', function () {
        assert.isTrue(isGreaterThanOrEqual(10, 100));
        assert.isTrue(isGreaterThanOrEqual(10)(100));
        assert.isTrue(isGreaterThanOrEqual(10, 10));
        assert.isTrue(isGreaterThanOrEqual(10)(10));
    });

    it('returns false if value is less than expected value', function () {
        assert.isFalse(isGreaterThanOrEqual(10, 1));
        assert.isFalse(isGreaterThanOrEqual(10)(1));
    });

    it('description', () => {
        assertDescription(isGreaterThanOrEqual(10), 'greater than or equal 10');
    });
});

import isLessThan = require('../src/lessThan');
import {assert} from 'chai';

describe('lessThan', () => {
    it('returns a function if only one argument provided', () => {
        assert.isFunction(isLessThan(10));
    });

    it('returns true if value is less than expected value', () => {
        assert.isTrue(isLessThan(10, 1));
        assert.isTrue(isLessThan(10)(1));
    });

    it('returns false if value is greater or equal to expected value', () => {
        assert.isFalse(isLessThan(10, 100));
        assert.isFalse(isLessThan(10)(100));
        assert.isFalse(isLessThan(10, 10));
        assert.isFalse(isLessThan(10)(10));
    });
});

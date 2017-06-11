import isNegative from '../src/negative';
import {assert} from 'chai';

describe('negative', () => {
    it('returns true if value is lower than 0', () => {
        assert.isTrue(isNegative(-1));
        assert.isTrue(isNegative(-Infinity));
    });

    it('return false if value is greater or equal 0', () => {
        assert.isFalse(isNegative(0));
        assert.isFalse(isNegative(100));
    });

    it('accepts only numbers', () => {
        assert.isFalse(isNegative(<any>'-100'));
        assert.isFalse(isNegative(<any>{}));
    });
});

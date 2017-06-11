import isNumber from '../src/number';
import {assert} from 'chai';

describe('number', () => {
    it('checks whether value is a number', () => {
        assert.isTrue(isNumber(new Number(1)));
        assert.isTrue(isNumber(1));
        assert.isTrue(isNumber(1000));
        assert.isFalse(isNumber('123'));
        assert.isFalse(isNumber('string'));
        assert.isFalse(isNumber([]));
    });
});
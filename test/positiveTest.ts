import isPositive = require('../src/positive');
import {assert} from 'chai';

describe('positive', function () {
    it('checks whether value is greater than 0', function () {
        assert.isTrue(isPositive(1));
        assert.isTrue(isPositive(Infinity));
        assert.isFalse(isPositive(0));
        assert.isFalse(isPositive(-100));
    });

    it('accepts only numbers', () => {
        assert.isFalse(isPositive(<any>'100'));
        assert.isFalse(isPositive(<any>{}));
        assert.isFalse(isPositive(<any>[1, 2]));
    });
});

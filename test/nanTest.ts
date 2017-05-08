import isNaN = require('../src/nan');
import {assert} from 'chai';

describe('NaN', () => {
    it('returns true if value is NaN', function () {
        assert.isTrue(isNaN(NaN));
        assert.isTrue(isNaN(new Number(NaN)));
        assert.isTrue(isNaN(new Number(undefined)));
    });

    it('returns false if value is not NaN', function () {
        assert.isFalse(isNaN(1));
        assert.isFalse(isNaN(undefined));
        assert.isFalse(isNaN({}));
        assert.isFalse(isNaN(new Number()));
    })
});

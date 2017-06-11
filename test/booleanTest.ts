import isBoolean from '../src/boolean';
import {assert} from 'chai';

describe('boolean', function () {
    it('returns true if value is a boolean', function () {
        assert.isTrue(isBoolean(new Boolean(true)));
        assert.isTrue(isBoolean(new Boolean(false)));
        assert.isTrue(isBoolean(true));
        assert.isTrue(isBoolean(false));
    });

    it('returns false is value is not a boolean', function () {
        assert.isFalse(isBoolean(''));
        assert.isFalse(isBoolean(undefined));
        assert.isFalse(isBoolean(null));
    })
});


import isArray from '../src/array';
import {assert} from 'chai';

describe('array', function () {
    it('checks whether a value is an array', function () {
        assert.isTrue(isArray([]));
        assert.isTrue(isArray([1, 2]));
        assert.isFalse(isArray({}));
        assert.isFalse(isArray('value'));
        assert.isFalse(isArray(0));
        assert.isFalse(isArray(arguments));
    });
});

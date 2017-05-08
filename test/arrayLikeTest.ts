import isArrayLike = require('../src/arrayLike');
import {assert} from 'chai';

describe('arrayLike', function () {
    it('checks whether is a array like object', function () {
        assert.isTrue(isArrayLike(arguments));
        assert.isTrue(isArrayLike({
            length: 0
        }));
        assert.isTrue(isArrayLike([]));

        assert.isFalse(isArrayLike({length: -1}));
        assert.isFalse(isArrayLike({}));
    });
});

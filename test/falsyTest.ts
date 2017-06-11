import isFalsy from '../src/falsy';
import {assert} from 'chai';

describe('falsy', function () {
    it('checks whether a value is falsy', function () {
        assert.isTrue(isFalsy(false));
        assert.isTrue(isFalsy(''));
        assert.isTrue(isFalsy(0));
        assert.isFalse(isFalsy(true));
        assert.isFalse(isFalsy('false'));
    });
});

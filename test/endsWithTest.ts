import endsWith from '../src/endsWith';
import {assert} from 'chai';

describe('endsWith', function () {
    it('returns a function if only one argument provided', function () {
        assert.isFunction(endsWith('suffix'));
    });

    it('throws TypeError if suffix is not a string', function () {
        assert.throws(function () {
            endsWith(<any>{});
        }, TypeError, /must be a string/);
        assert.throws(function () {
            endsWith(<any>{})({});
        }, TypeError, /must be a string/);
    });

    it('throws Error if suffix is empty', function () {
        assert.throws(function () {
            endsWith('');
        }, Error, /cannot be empty/);

        assert.throws(function () {
            endsWith('')({});
        }, Error, /cannot be empty/);
    });

    it('checks whether string ends with given suffix', function () {
        const suffix = 'woo';

        assert.isTrue(endsWith(suffix, 'hoowoo'));
        assert.isTrue(endsWith(suffix)('hoowoo'));
        assert.isTrue(endsWith(suffix, 'I am woo'));
        assert.isTrue(endsWith(suffix)('I am woo'));
        assert.isFalse(endsWith(suffix, 'I am woobmaster'));
        assert.isFalse(endsWith(suffix)('I am woobmaster'));
        assert.isFalse(endsWith(suffix, ''));
        assert.isFalse(endsWith(suffix)(''));
    });
});

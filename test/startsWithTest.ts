import startsWith = require('../src/startsWith');
import {assert} from 'chai';

describe('startsWith', function () {
    it('returns a function if only one argument provided', function () {
        assert.isFunction(startsWith('prefix'));
    });

    it('throws TypeError if prefix is not a string', function () {
        assert.throws(function () {
            startsWith(<any>{});
        }, TypeError, /must be a string/);
        assert.throws(function () {
            startsWith(<any>{})({});
        }, TypeError, /must be a string/);
    });

    it('throws Error if prefix is empty', function () {
        assert.throws(function () {
            startsWith('');
        }, Error, /cannot be empty/);

        assert.throws(function () {
            startsWith('')({});
        }, Error, /cannot be empty/);
    });

    it('checks whether string starts with given prefix', function () {
        const prefix = 'woo';

        assert.isTrue(startsWith(prefix, 'woohoo'));
        assert.isTrue(startsWith(prefix)('woohoo'));
        assert.isTrue(startsWith(prefix, 'wookieb'));
        assert.isTrue(startsWith(prefix)('wookieb'));
        assert.isFalse(startsWith(prefix, 'wo okieb'));
        assert.isFalse(startsWith(prefix)('wo okieb'));
        assert.isFalse(startsWith(prefix, ''));
        assert.isFalse(startsWith(prefix)(''));
    });

});

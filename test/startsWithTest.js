'use strict';

var startsWith = requireSrc('startsWith');

describe('startsWith', function() {
    it('returns a function if only one argument provided', function() {
        assert.ok(startsWith('prefix') instanceof Function);
    });

    it('throws TypeError if prefix is not a string', function() {
        assert.throws(function() {
            startsWith({});
        }, TypeError, /must be a string/);
        assert.throws(function() {
            startsWith({})({});
        }, TypeError, /must be a string/);
    });

    it('throws Error if prefix is empty', function() {
        assert.throws(function() {
            startsWith('');
        }, Error, /cannot be empty/);

        assert.throws(function() {
            startsWith('')({});
        }, Error, /cannot be empty/);
    });

    it('checks whether string starts with given prefix', function() {
        var prefix = 'woo';

        assert.ok(startsWith(prefix, 'woohoo'));
        assert.ok(startsWith(prefix)('woohoo'));
        assert.ok(startsWith(prefix, 'wookieb'));
        assert.ok(startsWith(prefix)('wookieb'));
        assert.ok(startsWith(prefix, 'wo okieb') === false);
        assert.ok(startsWith(prefix)('wo okieb') === false);
        assert.ok(startsWith(prefix, '') === false);
        assert.ok(startsWith(prefix)('') === false);
    });

});

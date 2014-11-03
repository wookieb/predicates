'use strict';

var endsWith = requireSrc('endsWith');


describe('endsWith', function() {
    it('returns a function if only one argument provided', function() {
        assert.ok(endsWith('suffix') instanceof Function);
    });

    it('throws TypeError if suffix is not a string', function() {
        assert.throws(function() {
            endsWith({});
        }, TypeError, /must be a string/);
        assert.throws(function() {
            endsWith({})({});
        }, TypeError, /must be a string/);
    });

    it('throws Error if suffix is empty', function() {
        assert.throws(function() {
            endsWith('');
        }, Error, /cannot be empty/);

        assert.throws(function() {
            endsWith('')({});
        }, Error, /cannot be empty/);
    });

    it('checks whether string ends with given suffix', function() {
        var suffix = 'woo';

        assert.ok(endsWith(suffix, 'hoowoo'));
        assert.ok(endsWith(suffix)('hoowoo'));
        assert.ok(endsWith(suffix, 'I am woo'));
        assert.ok(endsWith(suffix)('I am woo'));
        assert.ok(endsWith(suffix, 'I am woobmaster') === false);
        assert.ok(endsWith(suffix)('I am woobmaster') === false);
        assert.ok(endsWith(suffix, '') === false);
        assert.ok(endsWith(suffix)('') === false);
    });
});

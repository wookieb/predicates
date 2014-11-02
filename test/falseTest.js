'use strict';

var isFalse = requireSrc('false');

describe('false', function() {
    it('returns true if value is false', function() {
        assert.ok(isFalse(false));
    });

    it('returns false if value is not false', function() {
        assert.ok(isFalse(true) === false);
        assert.ok(isFalse('') === false);
    });
});

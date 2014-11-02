'use strict';

var isNaN = requireSrc('nan');

describe('NaN', function() {
    it('returns true if value is NaN', function() {
        assert.ok(isNaN(NaN));
    });

    it('returns false if value is not NaN', function() {
        assert.ok(isNaN(1) === false);
    })
});

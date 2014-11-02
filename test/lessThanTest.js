'use strict';

var isLessThan = requireSrc('lessThan');

describe('lessThan', function() {
    it('returns a function if only one argument provided', function() {
        assert.ok(isLessThan(10) instanceof Function);
    });

    it('returns true if value is less than expected value', function() {
        assert.ok(isLessThan(10, 1));
        assert.ok(isLessThan(10)(1));
    });

    it('returns false if value is greater or equal to expected value', function() {
        assert.ok(isLessThan(10, 100) === false);
        assert.ok(isLessThan(10)(100) === false);
        assert.ok(isLessThan(10, 10) === false);
        assert.ok(isLessThan(10)(10) === false);
    });
});

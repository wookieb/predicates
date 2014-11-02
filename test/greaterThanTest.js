'use strict';

var isGreaterThan = requireSrc('greaterThan');

describe('greaterThan', function() {
    it('returns a function if only one argument provided', function() {
        assert.ok(isGreaterThan(10) instanceof Function);
    });

    it('returns true if value is greater than expected value', function() {
        assert.ok(isGreaterThan(10, 100));
        assert.ok(isGreaterThan(10)(100));
    });

    it('returns false if value is less or equal to expected value', function() {
        assert.ok(isGreaterThan(10, 1) === false);
        assert.ok(isGreaterThan(10)(1) === false);
        assert.ok(isGreaterThan(10, 10) === false);
        assert.ok(isGreaterThan(10)(10) === false);
    });
});

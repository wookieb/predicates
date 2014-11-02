'use strict';

var isEqual = requireSrc('equal');

describe('equal', function() {
    it('returns a function if only one argument provided', function() {
        assert.ok(isEqual(5) instanceof Function);
    });

    it('returns false is value is not equal to expected one', function() {
        assert.ok(isEqual(5, '4') === false);
        assert.ok(isEqual(5)('4') === false);
    });

    it('returns true is value is equal to expected one', function() {
        assert.ok(isEqual(5, '5'));
        assert.ok(isEqual(5, 5));
        assert.ok(isEqual(5)('5'));
        assert.ok(isEqual(5)(5));
    });
});

'use strict';

var isFalsy = requireSrc('falsy');

describe('falsy', function() {
    it('checks whether a value is falsy', function() {
        assert.ok(isFalsy(false));
        assert.ok(isFalsy(''));
        assert.ok(isFalsy(0));
        assert.ok(!isFalsy(true));
        assert.ok(!isFalsy('false'));
    });
});

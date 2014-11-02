'use strict';

var isTruthy = requireSrc('truthy');

describe('truthy', function() {
    it('checks whether a value is truthy', function() {
        assert.ok(isTruthy(1));
        assert.ok(isTruthy(true));
        assert.ok(!isTruthy(false));
        assert.ok(isTruthy([]));
    });
});

'use strict';

var isArray = requireSrc('array');

describe('array', function() {
    it('checks whether a value is an array', function() {
        assert.ok(isArray([]));
        assert.ok(isArray([1, 2]));
        assert.ok(!isArray({}));
        assert.ok(!isArray('value'));
        assert.ok(!isArray(0));
        assert.ok(!isArray(arguments));
    });
});

'use strict';

var isNull = requireSrc('null');

describe('null', function() {
    it('checks whether a value is null', function() {
        assert.ok(isNull(null));
        assert.ok(!isNull(undefined));
        assert.ok(!isNull(''));
    });
});

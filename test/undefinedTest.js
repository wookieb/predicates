'use strict';

var isUndefined = requireSrc('undefined');

describe('undefined', function() {
    it('checks whether a value is undefined', function() {
        assert.ok(isUndefined(undefined));
        assert.ok(isUndefined());
        assert.ok(!isUndefined(null));
        assert.ok(!isUndefined('undefined'));
    });
});

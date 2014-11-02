'use strict';

var isTrue = requireSrc('true');

describe('true', function() {
    it('checks whether value is strictly true', function() {
        assert.ok(isTrue(true));
        assert.ok(!isTrue(false));
        assert.ok(!isTrue('true'));
    });
});

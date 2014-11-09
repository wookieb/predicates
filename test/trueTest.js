'use strict';

var isTrue = requireSrc('true');

describe('true', function() {
    it('checks whether value is strictly true', function() {
        assert.ok(isTrue(true));
        assert.ok(isTrue(new Boolean(true)));
        assert.ok(!isTrue(new Boolean(false)));
        assert.ok(!isTrue(false));
        assert.ok(!isTrue('true'));
    });
});

'use strict';

var isNumber = requireSrc('number');

describe('number', function() {
    it('checks whether value is a number', function() {
        assert.ok(isNumber(new Number(1)));
        assert.ok(isNumber(1));
        assert.ok(isNumber(1000));
        assert.ok(!isNumber('string'));
        assert.ok(!isNumber([]));
    });
});

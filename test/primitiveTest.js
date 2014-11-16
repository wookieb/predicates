'use strict';

var isPrimitive = requireSrc('primitive');

describe('primitive', function() {
    it('checks whether value is a primitive string', function() {
        assert.ok(isPrimitive('string'));

        assert.ok(!isPrimitive(new String('string')));
    });

    it('checks whether value is a primitive number', function() {
        assert.ok(isPrimitive(100));
        assert.ok(isPrimitive(NaN));

        assert.ok(!isPrimitive(new Number(100)));
    });

    it('checks whether value is a primitive boolean', function() {
        assert.ok(isPrimitive(true));
        assert.ok(isPrimitive(false));

        assert.ok(!isPrimitive(new Boolean(true)));
        assert.ok(!isPrimitive(new Boolean(false)));
    });

    it('checks whether value is null', function() {
        assert.ok(isPrimitive(null));
    });

    it('checks whether value is undefined', function() {
        assert.ok(isPrimitive(undefined));
    });

    it('return false for any other value', function() {
        assert.ok(!isPrimitive(/test/));
        assert.ok(!isPrimitive(Object.create(null)));
        assert.ok(!isPrimitive({}));
    });
});

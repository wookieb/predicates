'use strict';

var isOneOf = requireSrc('oneOf');

describe('oneOf', function() {
    var ALLOWED_VALUES = [1, '2', 'test'],
        VALID_VALUE = '2';

    it('throws an error if less than 2 allowed values provided', function() {
        assert.throws(function() {
            isOneOf()(VALID_VALUE);
        }, Error, 'At least 2 allowed values are required');

        assert.throws(function() {
            isOneOf(1)(VALID_VALUE);
        }, Error, 'At least 2 allowed values are required');
    });

    it('always returns a function', function() {
        assert.ok(isOneOf.apply(this, ALLOWED_VALUES) instanceof Function);
    });

    it('checks whether a value is equal to one of allowed values', function() {
        var predicate = isOneOf.apply(this, ALLOWED_VALUES);

        assert.ok(predicate(VALID_VALUE));
        assert.ok(!predicate(10));
        assert.ok(!predicate());
    });

});

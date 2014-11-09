'use strict';

var isEmpty = requireSrc('empty');

describe('empty', function() {
    it('checks if object has no enumerable properties', function() {
        var objectWithoutEnumerableProperties = {};

        Object.defineProperty(objectWithoutEnumerableProperties, 'property', {
            enumerable: false,
            value: 'yo'
        });

        assert.ok(isEmpty({}));
        assert.ok(isEmpty(objectWithoutEnumerableProperties));
        assert.ok(!isEmpty({some: 'property'}));
    });

    it('checks if object is an empty array like object', function() {
        assert.ok(isEmpty(arguments));
        assert.ok(isEmpty({length: 0}));
        assert.ok(isEmpty([]));
    });

    it('checks if object is an empty string', function() {
        assert.ok(isEmpty(''));
        assert.ok(new String(''));

        assert.ok(!isEmpty(new String(' ')));
        assert.ok(!isEmpty('  '));
        assert.ok(!isEmpty('test'));
    });

    it('every other value is not empty', function() {
        assert.ok(!isEmpty(0));
        assert.ok(!isEmpty(false));
    });
});

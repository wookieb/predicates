'use strict';

var isEmpty = require('../src/empty'),
    assert = require('chai').assert;


describe('empty', function() {

    var supportsNonEnumerableProperties = (function() {
        var o = {};
        Object.defineProperty(o, 'test', {
            enumerable: false,
            value: 10
        });

        return Object.getOwnPropertyDescriptor(o, 'test').enumerable === false;
    })();

    it('checks if object has no enumerable properties', function() {
        var objectWithoutEnumerableProperties = {};

        Object.defineProperty(objectWithoutEnumerableProperties, 'property', {
            enumerable: false,
            value: 'yo'
        });

        if (supportsNonEnumerableProperties) {
            assert.ok(isEmpty(objectWithoutEnumerableProperties));
        }

        assert.ok(isEmpty({}));
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

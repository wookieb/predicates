'use strict';

var hasProperty = requireSrc('hasProperty');

describe('hasProperty', function() {
    it('returns a function if only property provided', function() {
        assert.ok(hasProperty('property') instanceof Function);
    });

    it('throws a TypeError is property is not a string', function() {
        assert.throws(function() {
            hasProperty({});
        }, TypeError, /must be a string/);

        assert.throws(function() {
            hasProperty({})({});
        }, TypeError, /must be a string/);
    });

    it('checks whether an object has property', function() {
        var objectWithUndefinedProperty = {
                property: undefined
            },
            objectWithNotEnumerableProperty = {},
            objectWithProperty = {
                property: 'value'
            },
            objectWithPropertyInPrototype = Object.create({
                property: 'value'
            }),
            objectWithoutPrototype = Object.create(null);

        objectWithoutPrototype.property = 'value';

        Object.defineProperty(objectWithNotEnumerableProperty, 'property', {
            enumerable: false
        });

        assert.ok(hasProperty('property'), objectWithUndefinedProperty);
        assert.ok(hasProperty('property', objectWithUndefinedProperty));
        assert.ok(hasProperty('property', objectWithNotEnumerableProperty));
        assert.ok(hasProperty('property')(objectWithNotEnumerableProperty));
        assert.ok(hasProperty('property', objectWithProperty));
        assert.ok(hasProperty('property')(objectWithProperty));
        assert.ok(hasProperty('property', objectWithPropertyInPrototype));
        assert.ok(hasProperty('property')(objectWithPropertyInPrototype));
        assert.ok(hasProperty('property', objectWithoutPrototype));
        assert.ok(hasProperty('property')(objectWithoutPrototype));
        assert.ok(hasProperty('property', {}) === false);
        assert.ok(hasProperty('property')({}) === false);
        assert.ok(hasProperty('property', null) === false);
        assert.ok(hasProperty('property')(null) === false);
        assert.ok(hasProperty('property', 'str') === false);
        assert.ok(hasProperty('property')('str') === false);
        assert.ok(hasProperty('property', []) === false);
        assert.ok(hasProperty('property')([]) === false);
    });
});

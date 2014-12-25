'use strict';

var hasOwnProperty = require('../src/hasOwnProperty'),
    assert = require('chai').assert;

describe('hasOwnProperty', function() {
    it('returns a function if only property provided', function() {
        assert.ok(hasOwnProperty('property') instanceof Function);
    });

    it('throws a TypeError is property is not a string', function() {
        assert.throws(function() {
            hasOwnProperty({});
        }, TypeError, /must be a string/);

        assert.throws(function() {
            hasOwnProperty({})({});
        }, TypeError, /must be a string/);
    });

    it('checks whether an object has own property', function() {
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

        assert.ok(hasOwnProperty('property'), objectWithUndefinedProperty);
        assert.ok(hasOwnProperty('property', objectWithUndefinedProperty));
        assert.ok(hasOwnProperty('property', objectWithNotEnumerableProperty));
        assert.ok(hasOwnProperty('property')(objectWithNotEnumerableProperty));
        assert.ok(hasOwnProperty('property', objectWithProperty));
        assert.ok(hasOwnProperty('property')(objectWithProperty));
        assert.ok(hasOwnProperty('property', objectWithPropertyInPrototype) === false);
        assert.ok(hasOwnProperty('property')(objectWithPropertyInPrototype) === false);
        assert.ok(hasOwnProperty('property', objectWithoutPrototype));
        assert.ok(hasOwnProperty('property')(objectWithoutPrototype));
        assert.ok(hasOwnProperty('property', {}) === false);
        assert.ok(hasOwnProperty('property')({}) === false);
        assert.ok(hasOwnProperty('property', null) === false);
        assert.ok(hasOwnProperty('property')(null) === false);
        assert.ok(hasOwnProperty('property', 'str') === false);
        assert.ok(hasOwnProperty('property')('str') === false);
        assert.ok(hasOwnProperty('property', []) === false);
        assert.ok(hasOwnProperty('property')([]) === false);
    });
});

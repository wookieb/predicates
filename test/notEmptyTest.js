'use strict';

var isNotEmpty = require('../src/notEmpty'),
    assert = require('assert');

describe('notEmpty', function() {

    it('checks if object has enumerable properties', function() {
        var objectWithoutPrototype = Object.create(null);
        objectWithoutPrototype.property = 'value';

        assert.ok(isNotEmpty({property: 'value'}));
        assert.ok(isNotEmpty(objectWithoutPrototype));

        assert.ok(!isNotEmpty({}));
    });

    it('checks if object is an array like object and got some values defined', function() {
        assert.ok(isNotEmpty({length: 1}));
        assert.ok(isNotEmpty([1, 2]));

        assert.ok(!isNotEmpty(arguments));
        assert.ok(!isNotEmpty([]));
        assert.ok(!isNotEmpty({length: 0}));
    });

    it('checks if object is not an empty string', function() {
        assert.ok(isNotEmpty('  '));
        assert.ok(isNotEmpty('value'));

        assert.ok(!isNotEmpty(''));
    });

    it('every other value is not empty', function() {
        assert.ok(isNotEmpty(0));
        assert.ok(isNotEmpty(false));
        assert.ok(isNotEmpty(100));
    });
});
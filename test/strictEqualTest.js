'use strict';

var isStrictEqual = require('../src/strictEqual'),
    assert = require('assert');

describe('strictEqual', function() {
    var OBJECT = {};

    it('returns a function if only one argument provided', function() {
        assert.ok(isStrictEqual(1) instanceof Function);
    });

    it('checks whether value are strictly equal', function() {
        assert.ok(isStrictEqual(1, 1));
        assert.ok(isStrictEqual(1)(1));

        assert.ok(isStrictEqual(OBJECT, OBJECT));
        assert.ok(isStrictEqual(OBJECT)(OBJECT));
    })
});

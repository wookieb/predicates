'use strict';

var isIn = require('../src/in'),
    assert = require('chai').assert;

describe('in', function() {
    var COLLECTION = [1, '2', 'test'],
        VALID_VALUE = 1;

    it('returns function if only 1 argument provided', function() {
        assert.ok(isIn(COLLECTION) instanceof Function);
    });

    it('throws TypeError if collection is not an array', function() {
        assert.throws(function() {
            isIn({});
        }, TypeError, /must be an array/);

        assert.throws(function() {
            isIn({})(VALID_VALUE);
        }, TypeError, /must be an array/);
    });

    it('throws Error if collection is empty', function() {
        assert.throws(function() {
            isIn([]);
        }, Error, /cannot be empty/);

        assert.throws(function() {
            isIn([])(VALID_VALUE);
        }, Error, /cannot be empty/);
    });

    it('checks whether a value exists in collection', function() {
        assert.ok(isIn(COLLECTION, 1));
        assert.ok(isIn(COLLECTION)(1));
        assert.ok(isIn(COLLECTION, '1') === false);
        assert.ok(isIn(COLLECTION)('1') === false);
    });
});

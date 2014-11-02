'use strict';

var isInstanceOf = requireSrc('instanceOf');

describe('instanceOf', function() {
    var CLAZZ = function() {};

    it('throws TypeError if class is not a function', function() {
        var notFunction = 'definitely not a function';
        assert.throws(function() {
            isInstanceOf(notFunction);
        }, TypeError, /must be a function/);
        assert.throws(function() {
            isInstanceOf(notFunction)({});
        }, TypeError, /must be a function/);
    });

    it('returns another function if only one argument provided', function() {
        assert.ok(isInstanceOf(CLAZZ) instanceof Function);
    });

    it('returns true if value is an instance of given "class"', function() {
        assert.ok(isInstanceOf(CLAZZ, new CLAZZ));
        assert.ok(isInstanceOf(CLAZZ)(new CLAZZ));
        assert.ok(isInstanceOf(Array, []));
        assert.ok(isInstanceOf(Array)([]));
    });

    it('returns false is value is not an instance of given "class"', function() {
        assert.ok(isInstanceOf(CLAZZ, {}) === false);
        assert.ok(isInstanceOf(CLAZZ)({}) === false);
    });
});

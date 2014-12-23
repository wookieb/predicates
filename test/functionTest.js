'use strict';

var isFunction = require('../src/function'),
    assert = require('assert');

describe('function', function() {
    it('returns false if value is not a function', function() {
        assert.ok(isFunction({}) === false);
    });

    it('returns true is value is a function', function() {
        assert.ok(isFunction(function() {}));
    });
});

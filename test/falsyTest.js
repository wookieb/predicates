'use strict';

var isFalsy = require('../src/falsy'),
    assert = require('assert');

describe('falsy', function() {
    it('checks whether a value is falsy', function() {
        assert.ok(isFalsy(false));
        assert.ok(isFalsy(''));
        assert.ok(isFalsy(0));
        assert.ok(!isFalsy(true));
        assert.ok(!isFalsy('false'));
    });
});

'use strict';

var isNegative = require('../src/negative'),
    assert = require('assert');

describe('negative', function() {
    it('returns true if value is lower than 0', function() {
        assert.ok(isNegative(-1));
    });

    it('return false if value is greater or equal 0', function() {
        assert.ok(isNegative(0) === false);
        assert.ok(isNegative(100) === false);
    });
});

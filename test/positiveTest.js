'use strict';

var isPositive = require('../src/positive'),
    assert = require('chai').assert;

describe('positive', function() {
    it('checks whether value is greater than 0', function() {
        assert.ok(isPositive(1));
        assert.ok(!isPositive(0));
        assert.ok(!isPositive(-100));
    });
});

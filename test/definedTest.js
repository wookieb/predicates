'use strict';

var isDefined = require('../src/defined'),
    assert = require('chai').assert;

describe('defined', function() {
    it('checks whether value is not undefined', function() {
        assert.ok(isDefined(null));
        assert.ok(isDefined([]));
        assert.ok(!isDefined());
        assert.ok(!isDefined(undefined));
    });
});

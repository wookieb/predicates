'use strict';

var isUndefined = require('../src/undefined'),
    assert = require('chai').assert;

describe('undefined', function() {
    it('checks whether a value is undefined', function() {
        assert.ok(isUndefined(undefined));
        assert.ok(isUndefined());
        assert.ok(!isUndefined(null));
        assert.ok(!isUndefined('undefined'));
    });
});

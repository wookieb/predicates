'use strict';

var isBoolean = require('../src/boolean'),
    assert = require('chai').assert;

describe('boolean', function() {
    it('returns true if value is a boolean', function() {
        assert.ok(isBoolean(new Boolean(true)));
        assert.ok(isBoolean(new Boolean(false)));
        assert.ok(isBoolean(true));
        assert.ok(isBoolean(false));
    });

    it('returns false is value is not a boolean', function() {
        assert.ok(!isBoolean(''));
        assert.ok(!isBoolean(undefined));
        assert.ok(!isBoolean(null));
    })
});


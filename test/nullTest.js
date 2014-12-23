'use strict';

var isNull = require('../src/null'),
    assert = require('assert');

describe('null', function() {
    it('checks whether a value is null', function() {
        assert.ok(isNull(null));
        assert.ok(!isNull(undefined));
        assert.ok(!isNull(''));
    });
});

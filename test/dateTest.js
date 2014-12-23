'use strict';

var isDate = require('../src/date'),
    assert = require('assert');

describe('date', function() {
    it('returns true if value is an instance of Date', function() {
        assert.ok(isDate(new Date()));
    });

    it('returns false is value is not an instance of Date', function() {
        assert.ok(!isDate({}));
    });
});

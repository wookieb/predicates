'use strict';

var isNaN = require('../src/nan'),
    assert = require('assert');

describe('NaN', function() {
    it('returns true if value is NaN', function() {
        assert.ok(isNaN(NaN));
        assert.ok(isNaN(new Number(NaN)));
        assert.ok(isNaN(new Number(undefined)));
    });

    it('returns false if value is not NaN', function() {
        assert.ok(isNaN(1) === false);
        assert.ok(isNaN(undefined) === false);
        assert.ok(isNaN({}) === false);
        assert.ok(isNaN(new Number()) === false);
    })
});

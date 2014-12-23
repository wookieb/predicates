'use strict';

var isRegexp = require('../src/regexp'),
    assert = require('assert');

describe('regexp', function() {
    it('checks whether a value is a regexp', function() {
        assert.ok(isRegexp(/r/));
        assert.ok(isRegexp(new RegExp('r')));
        assert.ok(!isRegexp('/r/'));
    });
});

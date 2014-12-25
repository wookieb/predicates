'use strict';

var isArrayLike = require('../src/arrayLike'),
    assert = require('chai').assert;

describe('arrayLike', function() {
    it('checks whether is a array like object', function() {
        assert.ok(isArrayLike(arguments));
        assert.ok(isArrayLike({
            length: 0
        }));
        assert.ok(isArrayLike([]));

        assert.ok(!isArrayLike({length: -1}));
        assert.ok(!isArrayLike({}));
    });
});

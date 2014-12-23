'use strict';

var isString = require('../src/string'),
    assert = require('assert');

describe('string', function() {
    var OBJECT_WITH_TO_STRING = {
        toString: function() {
            return 'nope';
        }
    };
    it('checks whether the value is a string', function() {
        assert.ok(isString(''));
        assert.ok(isString('test'));
        assert.ok(isString(new String('test')));
        assert.ok(!isString(OBJECT_WITH_TO_STRING));
    });
});

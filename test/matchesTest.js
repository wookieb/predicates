'use strict';

var matches = require('../src/matches'),
    assert = require('assert');

describe('matches', function() {
    it('throws an error if regexp is not valid regexp', function() {
        assert.throws(function() {
            matches('r');
        }, TypeError, /must be a RegExp object/);

        assert.throws(function() {
            matches('r')('test');
        }, TypeError, /must be a RegExp object/);
    });

    it('returns a function if only regexp provided', function() {
        assert.ok(matches(/r/) instanceof Function);
    });

    it('checks whether a string matches a regexp', function() {
        assert.ok(matches(/wookieb/, 'i am wookieb'));
        assert.ok(matches(/wookieb/)('i am wookieb'));
        assert.ok(matches(/wookieb/)('i am groot') === false);
    });
});

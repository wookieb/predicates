'use strict';

var nativeIsInteger = require('../src/integer/native'),
    polyfillIsInteger = require('../src/integer/polyfill'),
    isInteger = require('../src/integer'),
    assert = require('chai').assert;

describe('integer', function() {
    it('picks native or polyfill function', function() {
        assert.ok(isInteger === nativeIsInteger || isInteger === polyfillIsInteger);
    });

    ['native', 'polyfill'].forEach(function(type) {
        var isInteger = type === 'native' ? nativeIsInteger : polyfillIsInteger;

        (typeof isInteger === 'undefined' ? describe.skip : describe)(type, function() {
            it('returns false if value is not a number', function() {
                assert.ok(isInteger(NaN) === false);
                assert.ok(isInteger('') === false);
                assert.ok(isInteger('1') === false);
            });

            it('returns false if value is not an integer', function() {
                assert.ok(isInteger(10.1) === false);
                assert.ok(isInteger(-9.23) === false);
            });

            it('returns true if value is an integer', function() {
                assert.ok(isInteger(1));
                assert.ok(isInteger(201));
            });
        });
    });
});

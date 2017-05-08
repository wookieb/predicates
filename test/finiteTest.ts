import {assert} from 'chai';
import nativeIsFinite = require('../src/finite/native');
import polyfillIsFinite = require('../src/finite/polyfill')
import isFinite = require('../src/finite');

describe('finite', function () {
    it('picks native or polyfill function', function () {
        assert.ok(isFinite === nativeIsFinite || isFinite === polyfillIsFinite);
    });

    ['native', 'polyfill'].forEach(function (type) {
        const isFinite = type === 'native' ? nativeIsFinite : polyfillIsFinite;

        (typeof isFinite === 'undefined' ? describe.skip : describe)(type, function () {
            it('returns false if value is not a number', function () {
                assert.isFalse(isFinite(NaN));
                assert.isFalse(isFinite(''));
                assert.isFalse(isFinite('1'));
            });

            it('returns false if value is infinity', function () {
                assert.isFalse(isFinite(Infinity));
                assert.isFalse(isFinite(-Infinity));
            });

            it('returns true if value is a finite number', function () {
                assert.isTrue(isFinite(1));
                assert.isTrue(isFinite(10.234));
            });
        });
    });
});

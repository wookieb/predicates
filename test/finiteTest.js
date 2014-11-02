'use strict';

var nativeIsFinite = requireSrc('finite/native'),
    polyfillIsFinite = requireSrc('finite/polyfill'),
    isFinite = requireSrc('finite');

describe('finite', function() {
    it('picks native or polyfill function', function() {
        assert.ok(isFinite === nativeIsFinite || isFinite === polyfillIsFinite);
    });

    ['native', 'polyfill'].forEach(function(type) {
        var isFinite = type === 'native' ? nativeIsFinite : polyfillIsFinite;

        (typeof isFinite === 'undefined' ? describe.skip : describe)(type, function() {
            it('returns false if value is not a number', function() {
                assert.ok(isFinite(NaN) === false);
                assert.ok(isFinite('') === false);
                assert.ok(isFinite('1') === false);
            });

            it('returns false if value is infinity', function() {
                assert.ok(isFinite(Infinity) === false);
                assert.ok(isFinite(-Infinity) === false);
            });

            it('returns true if value is a finite number', function() {
                assert.ok(isFinite(1));
                assert.ok(isFinite(10.234));
            });
        });
    });
});

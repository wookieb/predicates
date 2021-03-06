import nativeIsInteger from '../src/integer/native';
import polyfillIsInteger from '../src/integer/polyfill';
import isInteger from '../src/integer';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('integer', function () {
    it('picks native or polyfill function', function () {
        assert.ok(isInteger === nativeIsInteger || isInteger === polyfillIsInteger);
    });

    ['native', 'polyfill'].forEach(function (type) {
        const isInteger = type === 'native' ? nativeIsInteger : polyfillIsInteger;

        (typeof isInteger === 'undefined' ? describe.skip : describe)(type, function () {
            it('returns false if value is not a number', function () {
                assert.isFalse(isInteger(NaN));
                assert.isFalse(isInteger(''));
                assert.isFalse(isInteger('1'));
            });

            it('returns false if value is not an integer', function () {
                assert.isFalse(isInteger(10.1));
                assert.isFalse(isInteger(-9.23));
            });

            it('returns true if value is an integer', function () {
                assert.isTrue(isInteger(1));
                assert.isTrue(isInteger(201));
            });
        });


    });

    it('description', () => {
        assertDescription(isInteger, 'an integer');
    })
});

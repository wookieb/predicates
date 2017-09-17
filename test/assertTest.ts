import libAssert from '../src/assert';
import isString from '../src/string';
import {assert} from 'chai';

describe('assert', () => {
    it('simple assertion', () => {
        assert.doesNotThrow(() => {
            libAssert(isString, 'value')
        });

        assert.throws(() => {
            libAssert(isString, 100);
        }, Error, 'Assertion failed. Must be a string')
    });

    it('custom error class', () => {
        assert.throws(() => {
            libAssert(isString, 100, TypeError);
        }, TypeError, 'Assertion failed. Must be a string');
    });

    it('customer error message', () => {
        assert.throws(() => {
            libAssert(isString, 100, TypeError, 'Must be a string');
        }, TypeError, 'Must be a string');
    })

});
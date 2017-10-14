import {assert as libAssert} from '../src/assert';
import isString from '../src/string';
import {assert} from 'chai';

describe('assert', () => {
    it('simple assertion', () => {
        assert.doesNotThrow(() => {
            libAssert(isString)('value')
        });

        assert.throws(() => {
            libAssert(isString)(100);
        }, Error, 'Assertion failed. Must be a string')
    });

    it('simple assertion with base types', () => {
        assert.throws(() => {
            libAssert(String)(1);
        }, Error, 'Assertion failed. Must be a string');

        assert.doesNotThrow(() => {
            libAssert(String)('');
        });

        assert.throws(() => {
            libAssert(Boolean)(undefined);
        }, Error, 'Assertion failed. Must be a boolean');

        assert.doesNotThrow(() => {
            libAssert(Boolean)(true);
        });

        assert.throws(() => {
            libAssert(RegExp)(undefined);
        }, Error, 'Assertion failed. Must be a RegExp');

        assert.doesNotThrow(() => {
            libAssert(RegExp)(/a/);
        });

        assert.throws(() => {
            libAssert(Object)(undefined);
        }, Error, 'Assertion failed. Must be an object');

        assert.doesNotThrow(() => {
            libAssert(Object)({});
        });

        assert.throws(() => {
            libAssert(Function)(undefined);
        }, Error, 'Assertion failed. Must be a function');

        assert.doesNotThrow(() => {
            libAssert(Function)(Array.isArray);
        });

        assert.throws(() => {
            libAssert(Date)(undefined);
        }, Error, 'Assertion failed. Must be a Date');

        assert.doesNotThrow(() => {
            libAssert(Date)(new Date());
        });

        assert.throws(() => {
            libAssert(Array)(undefined);
        }, Error, 'Assertion failed. Must be an array');

        assert.doesNotThrow(() => {
            libAssert(Array)([]);
        });
    });

    it('custom error class', () => {
        assert.throws(() => {
            libAssert(isString, undefined, TypeError)(100);
        }, TypeError, 'Assertion failed. Must be a string');
    });

    it('customer error message', () => {
        assert.throws(() => {
            libAssert(isString, 'Must be a string', TypeError)(100);
        }, TypeError, 'Must be a string');
    });

    it('does nothing if predicate is satisfied', () => {
        assert.doesNotThrow(() => {
            libAssert(isString)('test');
        });
    });
});
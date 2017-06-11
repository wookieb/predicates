import isOneOf from '../src/oneOf';
import {assert} from 'chai';

describe('oneOf', function () {
    const ALLOWED_VALUES = [1, '2', 'test'];
    const VALID_VALUE = '2';

    it('throws an error if less than 2 allowed values provided', function () {
        assert.throws(function () {
            isOneOf()(VALID_VALUE);
        }, Error, 'At least 2 allowed values are required');

        assert.throws(function () {
            isOneOf(1)(VALID_VALUE);
        }, Error, 'At least 2 allowed values are required');
    });

    it('always returns a function', function () {
        assert.isFunction(isOneOf.apply(this, ALLOWED_VALUES));
    });

    it('checks whether a value is equal to one of allowed values', function () {
        const predicate = isOneOf.apply(this, ALLOWED_VALUES);

        assert.isTrue(predicate(VALID_VALUE));
        assert.isFalse(predicate(10));
        assert.isFalse(predicate());
    });

});

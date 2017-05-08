import isStrictEqual = require('../src/strictEqual');
import {assert} from 'chai';

describe('strictEqual', function () {
    const OBJECT = {};

    it('returns a function if only one argument provided', function () {
        assert.isFunction(isStrictEqual(1));
    });

    it('checks whether value are strictly equal', function () {
        assert.isTrue(isStrictEqual(1, 1));
        assert.isTrue(isStrictEqual(1)(1));

        assert.isTrue(isStrictEqual(OBJECT, OBJECT));
        assert.isTrue(isStrictEqual(OBJECT)(OBJECT));

        assert.isFalse(isStrictEqual({}, {}));
        assert.isFalse(isStrictEqual({})({}));
    });
});

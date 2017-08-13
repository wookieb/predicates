import isStrictEqual from '../src/strictEqual';
import {assert} from 'chai';
import {assertDescription} from "./common";

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

    it('description', () => {
        assertDescription(isStrictEqual(1), 'strictly equal to 1');
        assertDescription(isStrictEqual({}), 'strictly equal to {}');
    });
});

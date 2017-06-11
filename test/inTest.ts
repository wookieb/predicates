import isIn from '../src/in';
import {assert} from 'chai';

describe('in', function () {
    const COLLECTION = [1, '2', 'test'];
    const VALID_VALUE = 1;

    it('returns function if only 1 argument provided', function () {
        assert.isFunction(isIn(COLLECTION));
    });

    it('throws TypeError if collection is not an array', function () {
        assert.throws(function () {
            isIn(<any>{});
        }, TypeError, /must be an array/);

        assert.throws(function () {
            isIn(<any>{})(VALID_VALUE);
        }, TypeError, /must be an array/);
    });

    it('throws Error if collection is empty', function () {
        assert.throws(function () {
            isIn([]);
        }, Error, /cannot be empty/);

        assert.throws(function () {
            isIn([])(VALID_VALUE);
        }, Error, /cannot be empty/);
    });

    it('checks whether a value exists in collection', function () {
        assert.isTrue(isIn(COLLECTION, 1));
        assert.isTrue(isIn(COLLECTION)(1));
        assert.isFalse(isIn(COLLECTION, '1'));
        assert.isFalse(isIn(COLLECTION)('1'));
    });
});

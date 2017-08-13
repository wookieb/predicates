import isInstanceOf from '../src/instanceOf';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('instanceOf', function () {
    class CLAZZ {
    }

    it('throws TypeError if class is not a function', function () {
        const notFunction = 'definitely not a function';
        assert.throws(function () {
            isInstanceOf(<any>notFunction);
        }, TypeError, /must be a function/);
        assert.throws(function () {
            isInstanceOf(<any>notFunction)({});
        }, TypeError, /must be a function/);
    });

    it('returns another function if only one argument provided', function () {
        assert.isFunction(isInstanceOf(CLAZZ));
    });

    it('returns true if value is an instance of given "class"', function () {
        assert.isTrue(isInstanceOf(CLAZZ, new CLAZZ));
        assert.isTrue(isInstanceOf(CLAZZ)(new CLAZZ));
        assert.isTrue(isInstanceOf(Array, []));
        assert.isTrue(isInstanceOf(Array)([]));
    });

    it('returns false is value is not an instance of given "class"', function () {
        assert.isFalse(isInstanceOf(CLAZZ, {}));
        assert.isFalse(isInstanceOf(CLAZZ)({}));
    });

    it('description', () => {
        assertDescription(isInstanceOf(CLAZZ), 'an instance of CLAZZ');
    })
});

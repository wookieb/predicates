import isObject from '../src/object';
import {assert} from 'chai';

describe('object', function () {
    it('checks whether value is an object', function () {
        assert.isFalse(isObject(1));
        assert.isFalse(isObject(''))
        assert.isTrue(isObject(new Number(1)));
        assert.isTrue(isObject(new String('test')));
        assert.isTrue(isObject(new Date));
        assert.isTrue(isObject({}));
        assert.isTrue(isObject([]));
        assert.isTrue(isObject(function () {
        }));
        assert.isTrue(isObject(Object.create(null)));
    });
});

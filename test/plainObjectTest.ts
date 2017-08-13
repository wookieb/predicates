import isPlainObject from '../src/plainObject';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('plainObject', function () {
    class Foo {
    }

    it('checks whether objects inherits directly from Object', function () {
        assert.isTrue(isPlainObject({}));
        assert.isTrue(isPlainObject(new Object));
        assert.isTrue(isPlainObject({key: 'value'}));
        assert.isTrue(isPlainObject(arguments));
        assert.isTrue(isPlainObject(Math));

        assert.isFalse(isPlainObject([]));
        assert.isFalse(isPlainObject(new Foo));
        assert.isFalse(isPlainObject(new String('test')));
        assert.isFalse(isPlainObject('test'));
        assert.isFalse(isPlainObject(Error));
    });

    it('checks whether objects does not have prototype', function () {
        assert.isTrue(isPlainObject(Object.create(null)));
    });

    it('description', () => {
        assertDescription(isPlainObject, 'a plain object');
    });
});
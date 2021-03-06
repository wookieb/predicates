import isString from '../src/string';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('string', function () {
    const OBJECT_WITH_TO_STRING = {
        toString: function () {
            return 'nope';
        }
    };
    it('checks whether the value is a string', function () {
        assert.isTrue(isString(''));
        assert.isTrue(isString('test'));
        assert.isTrue(isString(new String('test')));
        assert.isFalse(isString(OBJECT_WITH_TO_STRING));
    });

    it('description', () => {
        assertDescription(isString, 'a string');
    })
});

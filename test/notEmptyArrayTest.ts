import isNotEmptyArray from '../src/notEmptyArray';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('notEmptyArray', () => {
    it('checks whether value is not an empty array', () => {
        assert.isTrue(isNotEmptyArray([1]));
        assert.isFalse(isNotEmptyArray({length: 1}));
        assert.isFalse(isNotEmptyArray([]));
        assert.isFalse(isNotEmptyArray({}));
        assert.isFalse(isNotEmptyArray(undefined));
    });

    it('description', () => {
        assertDescription(isNotEmptyArray, 'not an empty array');
    })
});
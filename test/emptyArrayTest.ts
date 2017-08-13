import isEmptyArray from '../src/emptyArray';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('emptyArray', () => {
    it('checks whether value is an array and is not empty', () => {
        assert.isTrue(isEmptyArray([]));
        assert.isFalse(isEmptyArray([1]));
        assert.isFalse(isEmptyArray(undefined));
        assert.isFalse(isEmptyArray({length: 0}));
        assert.isFalse(isEmptyArray({}));
    });

    it('description', () => {
        assertDescription(isEmptyArray, 'an empty array');
    })
});
import isNotEmptyArray from '../src/notEmptyArray';
import {assert} from 'chai';

describe('notEmptyArray', () => {
    it('checks whether value is not an empty array', () => {
        assert.isTrue(isNotEmptyArray([1]));
        assert.isFalse(isNotEmptyArray({length: 1}));
        assert.isFalse(isNotEmptyArray([]));
        assert.isFalse(isNotEmptyArray({}));
        assert.isFalse(isNotEmptyArray(undefined));
    });
});
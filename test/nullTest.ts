import isNull from '../src/null';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('null', () => {
    it('checks whether a value is null', () => {
        assert.isTrue(isNull(null));
        assert.isFalse(isNull(undefined));
        assert.isFalse(isNull(''));
    });

    it('description', () => {
        assertDescription(isNull, 'null');
    })
});

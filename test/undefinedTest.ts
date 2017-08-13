import isUndefined from '../src/undefined';
import {assert} from 'chai';
import {assertDescription} from "./common";


describe('undefined', function () {
    it('checks whether a value is undefined', function () {
        assert.isTrue(isUndefined(undefined));
        assert.isFalse(isUndefined(null));
        assert.isFalse(isUndefined('undefined'));
        assert.isFalse(isUndefined(0));
    });

    it('description', () => {
        assertDescription(isUndefined, 'undefined');
    });
});

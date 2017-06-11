import isUndefined from '../src/undefined';
import {assert} from 'chai';


describe('undefined', function () {
    it('checks whether a value is undefined', function () {
        assert.isTrue(isUndefined(undefined));
        assert.isFalse(isUndefined(null));
        assert.isFalse(isUndefined('undefined'));
        assert.isFalse(isUndefined(0));
    });
});

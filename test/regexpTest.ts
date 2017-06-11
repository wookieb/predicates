import isRegexp from '../src/regexp';
import {assert} from 'chai';

describe('regexp', function () {
    it('checks whether a value is a regexp', function () {
        assert.isTrue(isRegexp(/r/));
        assert.isTrue(isRegexp(new RegExp('r')));
        assert.isFalse(isRegexp('/r/'));
    });
});

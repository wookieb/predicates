import isRegexp from '../src/regexp';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('regexp', function () {
    it('checks whether a value is a regexp', function () {
        assert.isTrue(isRegexp(/r/));
        assert.isTrue(isRegexp(new RegExp('r')));
        assert.isFalse(isRegexp('/r/'));
    });

    it('description', () => {
        assertDescription(isRegexp, 'a RegExp');
    })
});

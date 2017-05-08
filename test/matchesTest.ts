import matches = require('../src/matches');
import {assert} from 'chai';

describe('matches', function () {
    it('throws an error if regexp is not valid regexp', function () {
        assert.throws(function () {
            matches(<any>'r');
        }, TypeError, /must be a RegExp object/);

        assert.throws(function () {
            matches(<any>'r')('test');
        }, TypeError, /must be a RegExp object/);
    });

    it('returns a function if only regexp provided', function () {
        assert.isFunction(matches(/r/));
    });

    it('checks whether a string matches a regexp', function () {
        assert.isTrue(matches(/wookieb/, 'i am wookieb'));
        assert.isTrue(matches(/wookieb/)('i am wookieb'));
        assert.isFalse(matches(/wookieb/)('i am groot'));
    });
});

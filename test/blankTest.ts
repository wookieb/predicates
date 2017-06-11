import blank from '../src/blank';
import {assert} from 'chai';

describe('blank', function () {
    it('return false if a value is not a string', function () {
        assert.isFalse(blank({}));
        assert.isFalse(blank([]));
        assert.isFalse(blank(1));
    });

    it('checks whether a string contains only whitespaces', function () {
        assert.isTrue(blank('  '));
        assert.isTrue(blank("\n     "));
        assert.isTrue(blank(new String('   ')));

        assert.isFalse(blank({
            toString: function () {
                return 'test';
            }
        }));
        assert.isFalse(blank('a'));
        assert.isFalse(blank(new String('aa')));
        assert.isFalse(blank('0'));
        assert.isFalse(blank('wookieb'));
        assert.isFalse(blank('    w'));
    });

    it('returns true if string is empty', function () {
        assert.isTrue(blank(''));
        assert.isTrue(blank(new String('')));
    });
});

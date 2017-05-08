import notBlank = require('../src/notBlank');
import {assert} from 'chai';

describe('blank', () => {
    it('return false if a value is not a string', () => {
        assert.isFalse(notBlank({}));
        assert.isFalse(notBlank([]));
        assert.isFalse(notBlank(1));
    });

    it('checks whether a string contains only whitespaces', function () {
        assert.isFalse(notBlank('  '));
        assert.isFalse(notBlank("\n     "));
        assert.isFalse(notBlank(new String('   ')));
        assert.isFalse(notBlank({
            toString: function () {
                return 'test';
            }
        }));

        assert.isTrue(notBlank('a'));
        assert.isTrue(notBlank(new String('aa')));
        assert.isTrue(notBlank('0'));
        assert.isTrue(notBlank('wookieb'));
        assert.isTrue(notBlank('    w'));
    });

    it('returns false if string is empty', function () {
        assert.isFalse(notBlank(''));
        assert.isFalse(notBlank(new String('')));
    });
});

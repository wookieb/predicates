'use strict';

var notBlank = requireSrc('notBlank');

describe('blank', function() {
    it('return false if a value is not a string', function() {
        assert.ok(notBlank({}) === false);
        assert.ok(notBlank([]) === false);
        assert.ok(notBlank(1) === false);
    });

    it('checks whether a string contains only whitespaces', function() {
        assert.ok(!notBlank('  '));
        assert.ok(!notBlank("\n     "));
        assert.ok(!notBlank(new String('   ')));
        assert.ok(!notBlank({
            toString: function() { return 'test'; }
        }));

        assert.ok(notBlank('a'));
        assert.ok(notBlank(new String('aa')));
        assert.ok(notBlank('0'));
        assert.ok(notBlank('wookieb'));
        assert.ok(notBlank('    w'));
    });

    it('returns false if string is empty', function() {
        assert.ok(!notBlank(''));
        assert.ok(!notBlank(new String('')));
    });
});

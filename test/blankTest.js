'use strict';

var blank = requireSrc('blank');

describe('blank', function() {
    it('return false if a value is not a string', function() {
        assert.ok(blank({}) === false);
        assert.ok(blank([]) === false);
        assert.ok(blank(1) === false);
    });

    it('checks whether a string contains only whitespaces', function() {
        assert.ok(blank('  '));
        assert.ok(blank("\n     "));
        assert.ok(blank(new String('   ')));

        assert.ok(!blank('a'));
        assert.ok(!blank(new String('aa')));
        assert.ok(!blank('0'));
        assert.ok(!blank('wookieb'));
        assert.ok(!blank('    w'));
    });

    it('returns true if string is empty', function() {
        assert.ok(blank(''));
        assert.ok(blank(new String('')));
    });
});

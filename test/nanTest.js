'use strict';

var isNaN = requireSrc('nan');

describe('NaN', function() {
    it('returns true if value is NaN', function() {
        assert.ok(isNaN(NaN));
        assert.ok(isNaN(new Number(NaN)));
        assert.ok(isNaN(new Number(undefined)));
    });

    it('returns false if value is not NaN', function() {
        assert.ok(isNaN(1) === false);
        assert.ok(isNaN(undefined) === false);
        assert.ok(isNaN({}) === false);
        assert.ok(isNaN(new Number()) === false);
    })
});

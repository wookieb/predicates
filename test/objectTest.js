'use strict';

var isObject = requireSrc('object');

describe('object', function() {
    it('checks whether value is an object', function() {
        assert.ok(!isObject(1));
        assert.ok(!isObject(''))
        assert.ok(isObject(new Number(1)));
        assert.ok(isObject(new String('test')));
        assert.ok(isObject(new Date));
        assert.ok(isObject({}));
        assert.ok(isObject([]));
        assert.ok(isObject(function() {}));
    });
});

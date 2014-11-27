'use strict';

var isPlainObject = requireSrc('plainObject');

describe('plainObject', function() {
    var Foo = function() {};

    it('checks whether objects inherits directly from Object', function() {
        assert.ok(isPlainObject({}));
        assert.ok(isPlainObject(new Object));
        assert.ok(isPlainObject({key: 'value'}));
        assert.ok(isPlainObject(arguments));
        assert.ok(isPlainObject(Math));

        assert.ok(!isPlainObject([]));
        assert.ok(!isPlainObject(new Foo));
        assert.ok(!isPlainObject(new String('test')));
        assert.ok(!isPlainObject('test'));
        assert.ok(!isPlainObject(Error));
    });

    it('checks whether objects does not have prototype', function() {
        assert.ok(isPlainObject(Object.create(null)));
    });
});
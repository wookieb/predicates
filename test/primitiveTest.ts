import isPrimitive from '../src/primitive';
import {assert} from 'chai';

describe('primitive', function () {
    it('checks whether value is a primitive string', function () {
        assert.isTrue(isPrimitive('string'));

        assert.isFalse(isPrimitive(new String('string')));
    });

    it('checks whether value is a primitive number', function () {
        assert.isTrue(isPrimitive(100));
        assert.isTrue(isPrimitive(NaN));

        assert.isFalse(isPrimitive(new Number(100)));
    });

    it('checks whether value is a primitive boolean', function () {
        assert.isTrue(isPrimitive(true));
        assert.isTrue(isPrimitive(false));

        assert.isFalse(isPrimitive(new Boolean(true)));
        assert.isFalse(isPrimitive(new Boolean(false)));
    });

    it('checks whether value is null', function () {
        assert.isTrue(isPrimitive(null));
    });

    it('checks whether value is undefined', function () {
        assert.isTrue(isPrimitive(undefined));
    });

    it('return false for any other value', function () {
        assert.isFalse(isPrimitive(/test/));
        assert.isFalse(isPrimitive(Object.create(null)));
        assert.isFalse(isPrimitive({}));
    });
});

import isEmpty from '../src/empty';
import {assert} from 'chai';

describe('empty', function () {

    const supportsNonEnumerableProperties = (function () {
        const o = {};
        Object.defineProperty(o, 'test', {
            enumerable: false,
            value: 10
        });

        return Object.getOwnPropertyDescriptor(o, 'test').enumerable === false;
    })();

    it('checks if object has no enumerable properties', function () {
        const objectWithoutEnumerableProperties = {};

        Object.defineProperty(objectWithoutEnumerableProperties, 'property', {
            enumerable: false,
            value: 'yo'
        });

        if (supportsNonEnumerableProperties) {
            assert.isTrue(isEmpty(objectWithoutEnumerableProperties));
        }

        assert.isTrue(isEmpty({}));
        assert.isFalse(isEmpty({some: 'property'}));
    });

    it('checks if object is an empty array like object', function () {
        assert.isTrue(isEmpty(arguments));
        assert.isTrue(isEmpty({length: 0}));
        assert.isTrue(isEmpty([]));
    });

    it('checks if object is an empty string', function () {
        assert.isTrue(isEmpty(''));
        assert.isTrue(isEmpty(new String('')));

        assert.isFalse(isEmpty(new String(' ')));
        assert.isFalse(isEmpty('  '));
        assert.isFalse(isEmpty('test'));
    });

    it('undefined is empty', function () {
        assert.isTrue(isEmpty(undefined));
        assert.isTrue(isEmpty(void 0));
    });

    it('every other value is not empty', function () {
        assert.isFalse(isEmpty(0));
        assert.isFalse(isEmpty(false));
    });
});

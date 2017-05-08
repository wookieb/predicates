import hasProperty = require('../src/hasProperty');
import {assert} from 'chai';

describe('hasProperty', () => {
    it('returns a function if only property provided', function () {
        assert.isFunction(hasProperty('property'));
    });

    it('throws a TypeError is property is not a string', function () {
        assert.throws(function () {
            hasProperty(<any>{});
        }, TypeError, /must be a string/);

        assert.throws(function () {
            hasProperty(<any>{})({});
        }, TypeError, /must be a string/);
    });

    it('checks whether an object has property', function () {
        const objectWithUndefinedProperty: any = {
            property: undefined
        };
        const objectWithNotEnumerableProperty = {};
        const objectWithProperty = {
            property: 'value'
        };
        const objectWithPropertyInPrototype = Object.create({
            property: 'value'
        });
        const objectWithoutPrototype = Object.create(null);

        objectWithoutPrototype.property = 'value';

        Object.defineProperty(objectWithNotEnumerableProperty, 'property', {
            enumerable: false,
            value: 10
        });

        assert.isTrue(hasProperty('property', objectWithUndefinedProperty));
        assert.isTrue(hasProperty('property')(objectWithUndefinedProperty));
        assert.isTrue(hasProperty('property', objectWithNotEnumerableProperty));
        assert.isTrue(hasProperty('property')(objectWithNotEnumerableProperty));
        assert.isTrue(hasProperty('property', objectWithProperty));
        assert.isTrue(hasProperty('property')(objectWithProperty));
        assert.isTrue(hasProperty('property', objectWithPropertyInPrototype));
        assert.isTrue(hasProperty('property')(objectWithPropertyInPrototype));
        assert.isTrue(hasProperty('property', objectWithoutPrototype));
        assert.isTrue(hasProperty('property')(objectWithoutPrototype));
        assert.isFalse(hasProperty('property', {}));
        assert.isFalse(hasProperty('property')({}));
        assert.isFalse(hasProperty('property', null));
        assert.isFalse(hasProperty('property')(null));
        assert.isFalse(hasProperty('property', 'str'));
        assert.isFalse(hasProperty('property')('str'));
        assert.isFalse(hasProperty('property', []));
        assert.isFalse(hasProperty('property')([]));
    });
});

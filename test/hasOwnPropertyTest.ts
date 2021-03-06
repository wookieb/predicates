import hasOwnProperty from '../src/hasOwnProperty';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('hasOwnProperty', function () {
    it('returns a function if only property provided', function () {
        assert.isFunction(hasOwnProperty('property'));
    });

    it('throws a TypeError is property is not a string', function () {
        assert.throws(function () {
            hasOwnProperty(<any>{});
        }, TypeError, /must be a string/);

        assert.throws(function () {
            hasOwnProperty(<any>{})({});
        }, TypeError, /must be a string/);
    });

    it('works on symbols as well', () => {
        const sym = Symbol('foo');
        const sym2 = Symbol('bar');
        const object = {
            [sym]: 'value'
        };

        assert.isTrue(hasOwnProperty(sym, object));
        assert.isFalse(hasOwnProperty(sym2, object));
    });

    it('checks whether an object has own property', function () {
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

        assert.isTrue(hasOwnProperty('property', objectWithUndefinedProperty));
        assert.isTrue(hasOwnProperty('property')(objectWithUndefinedProperty));
        assert.isTrue(hasOwnProperty('property', objectWithNotEnumerableProperty));
        assert.isTrue(hasOwnProperty('property')(objectWithNotEnumerableProperty));
        assert.isTrue(hasOwnProperty('property', objectWithProperty));
        assert.isTrue(hasOwnProperty('property')(objectWithProperty));
        assert.isTrue(hasOwnProperty('property', objectWithoutPrototype));
        assert.isTrue(hasOwnProperty('property')(objectWithoutPrototype));
        assert.isFalse(hasOwnProperty('property', objectWithPropertyInPrototype));
        assert.isFalse(hasOwnProperty('property')(objectWithPropertyInPrototype));
        assert.isFalse(hasOwnProperty('property', {}));
        assert.isFalse(hasOwnProperty('property')({}));
        assert.isFalse(hasOwnProperty('property', null));
        assert.isFalse(hasOwnProperty('property')(null));
        assert.isFalse(hasOwnProperty('property', 'str'));
        assert.isFalse(hasOwnProperty('property')('str'));
        assert.isFalse(hasOwnProperty('property', []));
        assert.isFalse(hasOwnProperty('property')([]));
    });

    it('description', () => {
        assertDescription(hasOwnProperty('name'), 'an object with own "name" property')
    });
});

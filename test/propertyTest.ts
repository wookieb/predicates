import isProperty = require('../src/property');
import {assert} from 'chai';
import * as sinon from 'sinon';
describe('property', function () {
    const PREDICATE = function (value: any) {
        return value === 2;
    };
    const PROPERTY = 'propertyName';

    it('requires predicates to be a function', function () {
        assert.throws(function () {
            isProperty(PROPERTY, <any>'test');
        }, TypeError, /Predicate is not a function/i);
    });

    it('requires at least 2 arguments', function () {
        assert.throws(function () {
            isProperty.call(null, PROPERTY);
        }, Error, /Too few arguments/);
    });

    it('returns a predicate if 2 arguments provided', function () {
        assert.isFunction(isProperty(PROPERTY, PREDICATE));
    });

    it('automatically fails if provided value is not an object', function () {
        const NOT_AN_OBJECT = 'test';
        const NOT_AN_OBJECT_2: any = undefined;
        const spy = sinon.spy();

        assert.isFalse(isProperty(PROPERTY, spy, NOT_AN_OBJECT));
        assert.isFalse(isProperty(PROPERTY, spy)(NOT_AN_OBJECT));

        // Covers #21
        assert.isFalse(isProperty(PROPERTY, spy, NOT_AN_OBJECT_2));
        assert.isFalse(isProperty(PROPERTY, spy)(NOT_AN_OBJECT_2));

        sinon.assert.notCalled(spy);
    });

    it('calls predicate in the same context and proper arguments', function () {
        const CONTEXT = {custom: 'context'};
        const stub = sinon.stub().returns(true);
        const extraArgs = [2, 10];

        const obj = {
            [PROPERTY]: 'value'
        };
        assert.isTrue(isProperty.call(CONTEXT, PROPERTY, stub, obj, ...extraArgs));
        assert.isTrue(isProperty(PROPERTY, stub).call(CONTEXT, obj, ...extraArgs));

        sinon.assert.calledTwice(stub);
        sinon.assert.alwaysCalledOn(stub, CONTEXT);
        sinon.assert.alwaysCalledWith(stub, obj[PROPERTY], ...extraArgs);
    });


    it('checks whether a property value satisfies given predicate', function () {
        const VALID_OBJECT = {[PROPERTY]: 2};
        const VALID_OBJECT2 = Object.create(null);
        VALID_OBJECT2[PROPERTY] = 2;

        const INVALID_OBJECT = {};
        const INVALID_OBJECT2 = {[PROPERTY]: '2'};

        assert.isTrue(isProperty(PROPERTY, PREDICATE, VALID_OBJECT));
        assert.isTrue(isProperty(PROPERTY, PREDICATE)(VALID_OBJECT));

        assert.isTrue(isProperty(PROPERTY, PREDICATE, VALID_OBJECT2));
        assert.isTrue(isProperty(PROPERTY, PREDICATE)(VALID_OBJECT2));

        assert.isFalse(isProperty(PROPERTY, PREDICATE, INVALID_OBJECT));
        assert.isFalse(isProperty(PROPERTY, PREDICATE)(INVALID_OBJECT));

        assert.isFalse(isProperty(PROPERTY, PREDICATE, INVALID_OBJECT2));
        assert.isFalse(isProperty(PROPERTY, PREDICATE)(INVALID_OBJECT2));
    });
});
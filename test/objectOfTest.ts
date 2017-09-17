import objectOf from '../src/objectOf';
import isNumber from '../src/number';
import {assert} from 'chai';
import {truePredicate} from "./common";
import * as sinon from 'sinon';
import {assertDescription} from "./common";

function createSimpleObject<T>(values: T[]) {
    return values.reduce((result: { [k: string]: T }, value: T, index: number) => {
        result['key' + index] = value;
        return result;
    }, {});
}

describe('objectOf', function () {

    const EXAMPLE_OBJECT: any = {
        key0: 0,
        key1: 1,
        key2: 2,
        key3: 3,
        key4: 4
    };

    it('returns a function if only one argument provided', function () {
        assert.isFunction(objectOf(truePredicate));
    });

    it('throws TypeError if predicate is not a function', function () {
        assert.throws(function () {
            objectOf(<any>'definitely not a function')('value');
        });
    });

    it('calls predicate for every key and stops on first that does not satisfy predicate', function () {
        const stub = sinon.stub();

        stub.onFirstCall().returns(true);
        stub.onSecondCall().returns(true);
        stub.onThirdCall().returns(false);

        objectOf(stub)(EXAMPLE_OBJECT);

        sinon.assert.calledThrice(stub);
    });

    it('calls a predicate with the same context and proper arguments', function () {
        const exampleContext = {
            some: 'context'
        };
        const stub = sinon.stub().returns(true);

        const extraArgs = [1, 2, 3];
        objectOf.call(exampleContext, stub, EXAMPLE_OBJECT, ...extraArgs);
        objectOf(stub).call(exampleContext, EXAMPLE_OBJECT, ...extraArgs);

        sinon.assert.callCount(stub, 10);
        sinon.assert.alwaysCalledOn(stub, exampleContext);


        const objectValues = Object.keys(EXAMPLE_OBJECT).map(k => EXAMPLE_OBJECT[k]);
        const valueMatcher = sinon.match((v: any) => objectValues.indexOf(v) !== -1);
        sinon.assert.alwaysCalledWithMatch(stub, valueMatcher, ...extraArgs);

    });

    it('checks whether every enumerable property satisfies a predicate', function () {
        const invalidObject = {
            key0: 0,
            key1: 'string'
        };
        assert.isTrue(objectOf(isNumber, EXAMPLE_OBJECT));
        assert.isTrue(objectOf(isNumber)(EXAMPLE_OBJECT));
        assert.isFalse(objectOf(isNumber, invalidObject));
        assert.isFalse(objectOf(isNumber)(invalidObject));
    });

    it('description', () => {
        assertDescription(objectOf(isNumber), 'an object of elements of type: a number');
    });

    it('object of simple types', () => {
        const noop = function () {
        };
        assert.isTrue(objectOf(String, createSimpleObject(['1', '2'])));
        assert.isTrue(objectOf(Boolean, createSimpleObject([true, false])));
        assert.isTrue(objectOf(RegExp, createSimpleObject([/a/, /b/])));
        assert.isTrue(objectOf(Object, createSimpleObject([{test: 1}, {}])));
        assert.isTrue(objectOf(Function, createSimpleObject([noop, noop])));
        assert.isTrue(objectOf(Date, createSimpleObject([new Date(), new Date()])));
        assert.isTrue(objectOf(Array, createSimpleObject([[], []])));
    });
});

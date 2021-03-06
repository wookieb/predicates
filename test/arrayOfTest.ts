import isArrayOf from '../src/arrayOf';
import {assert} from 'chai'
import * as sinon from 'sinon';
import {assertDescription} from "./common";
import isString from "../src/string";

describe('arrayOf', function () {
    const IS_STRING = function IS_STRING(value: any) {
        return typeof value === 'string';
    };

    it('returns function if only one argument provided', function () {
        assert.isFunction(isArrayOf(IS_STRING));
    });

    it('calls a predicate with the same context and proper arguments', function () {
        const exampleContext = {some: 'property'};
        const stub = sinon.stub().returns(true);

        const arr = [1, 2];
        const extraArgs = ['super', 'extra', 'args'];
        isArrayOf(stub).call(exampleContext, arr, ...extraArgs);
        isArrayOf.call(exampleContext, stub, arr, ...extraArgs);

        sinon.assert.callCount(stub, 4);
        sinon.assert.alwaysCalledOn(stub, exampleContext);
        sinon.assert.calledWith(stub, 1, ...extraArgs);
        sinon.assert.calledWith(stub, 2, ...extraArgs);
    });

    it('throws a TypeError if predicate is not a function', function () {
        const notFunction: any = 'definitely not a function';
        assert.throws(function () {
            isArrayOf(notFunction);
        }, TypeError, /must be a function/);
        assert.throws(function () {
            isArrayOf(notFunction)([]);
        }, TypeError, /must be a function/);
    });

    it('returns false if value is not an array', function () {
        assert.isFalse(isArrayOf(IS_STRING)({}));
    });

    it('returns true if array is empty', function () {
        assert.isTrue(isArrayOf(IS_STRING)([]));
    });

    it('checks whether every element of an array satisfies a predicate', function () {
        assert.isTrue(isArrayOf(IS_STRING)(['test', 'array']));
        assert.isFalse(isArrayOf(IS_STRING)([1, '3']));
    });

    it('description', () => {
        assertDescription(
            isArrayOf(IS_STRING),
            'an array of elements of type: satisfies custom predicate "IS_STRING"'
        );

        assertDescription(
            isArrayOf(isString),
            'an array of elements of type: a string'
        )
    });

    it('array of simple types', () => {
        const noop = function() {};
        assert.isTrue(isArrayOf(String, ['1', '2']));
        assert.isTrue(isArrayOf(Boolean, [true, false]));
        assert.isTrue(isArrayOf(RegExp, [/a/, /b/]));
        assert.isTrue(isArrayOf(Object, [{test: 1}, {}]));
        assert.isTrue(isArrayOf(Function, [noop, noop]));
        assert.isTrue(isArrayOf(Date, [new Date(), new Date()]));
        assert.isTrue(isArrayOf(Array, [[], []]));
    });
});
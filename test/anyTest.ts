import any from '../src/any';
import {assert} from 'chai';
import * as sinon from 'sinon';
import {assertDescription, falsePredicate, truePredicate} from "./common";
import isString from "../src/string";
import isNumber from "../src/number";

describe('any', function () {


    it('returns a function', function () {
        assert.isFunction(any(truePredicate, falsePredicate));
    });

    it('throws error if not every predicate is a function', function () {
        assert.throws(function () {
            any(truePredicate, <any>'definitely not a function');
        });
    });

    it('throws error if zero or only one predicate provided', function () {
        assert.throws(function () {
            any();
        }, Error, 'need to provide at least two predicates');

        assert.throws(function () {
            any(truePredicate);
        }, Error, 'need to provide at least two predicates');

        assert.doesNotThrow(function () {
            any(truePredicate, falsePredicate);
        });
    });

    it('calls predicates in order', function () {
        const p1 = sinon.stub().returns(false);
        const p2 = sinon.stub().returns(false);
        const p3 = sinon.stub().returns(false);
        const value = 'value';

        any(p1, p2, p3)(value);

        sinon.assert.calledWith(p1, value);
        sinon.assert.calledWith(p2, value);
        sinon.assert.calledWith(p3, value);

        assert.ok(p1.calledBefore(p2));
        assert.ok(p2.calledBefore(p3));
    });

    it('calls predicates with correct context and arguments', function () {
        const args = [1, 2, 3, 4];
        const context = {example: 'context'};
        const stub = sinon.stub().returns(false);
        const testPredicate = any(stub, stub, stub, stub);

        assert.isFalse(testPredicate.apply(context, args));

        sinon.assert.callCount(stub, 4);
        sinon.assert.alwaysCalledOn(stub, context);
        sinon.assert.calledWith(stub, ...args);
    });

    it('checks whether at least one predicate has been satisfied', function () {
        assert.isTrue(any(falsePredicate, truePredicate, falsePredicate)('value'));
        assert.isFalse(any(falsePredicate, falsePredicate)('value'));
    });

    it('does not call all predicates if one of them has been satisfied earlier', function () {
        assert.isTrue(any(truePredicate, function () {
            throw new Error('Last predicate should not be called');
        })('value'));
    });

    it('description', () => {
        assertDescription(any(isString, isNumber), 'satisfies any of predicates: a string, a number')
    });
});

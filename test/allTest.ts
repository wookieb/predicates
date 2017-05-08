import {assert} from 'chai';
import * as sinon from 'sinon';

import all = require('../src/all');
import {falsePredicate, truePredicate} from "./common";

describe('all', function () {

    it('returns a function', function () {
        assert.isFunction(all(truePredicate, falsePredicate));
    });

    it('throws error if not every predicate is a function', function () {
        assert.throws(function () {
            all(truePredicate, <any>'definitely not a function');
        });
    });

    it('throws error if zero or only one predicate provided', function () {
        assert.throws(function () {
            all();
        }, Error, 'need to provide at least two predicates');

        assert.throws(function () {
            all(truePredicate);
        }, Error, 'need to provide at least two predicates');

        assert.doesNotThrow(function () {
            all(truePredicate, falsePredicate);
        });
    });

    it('calls predicates in order', function () {
        const p1 = sinon.stub().returns(true);
        const p2 = sinon.stub().returns(true);
        const p3 = sinon.stub().returns(true);
        const value = 'value';

        all(p1, p2, p3)(value);

        sinon.assert.calledWith(p1, value);
        sinon.assert.calledWith(p2, value);
        sinon.assert.calledWith(p3, value);

        assert.ok(p1.calledBefore(p2));
        assert.ok(p2.calledBefore(p3));
    });

    it('calls predicates with correct context and arguments', function () {
        const args = [1, 2, 3, 4];
        const context = {example: 'context'};
        const predicate = function (arg1: any, arg2: any, arg3: any, arg4: any, arg5: any) {
            assert.strictEqual(context, this);
            assert.strictEqual(arg1, 1);
            assert.strictEqual(arg2, 2);
            assert.strictEqual(arg3, 3);
            assert.strictEqual(arg4, 4);
            assert.strictEqual(arg5, undefined);
            return false;
        };
        const testPredicate = all(predicate, predicate, predicate, predicate);

        assert.isFalse(testPredicate.apply(context, args));
    });

    it('checks whether all predicates are satisfied', function () {
        assert.isTrue(all(truePredicate, truePredicate, truePredicate)('value'));
        assert.isFalse(all(truePredicate, falsePredicate)('value'));
    });

    it('does not call all predicates if one of them has not been satisfied earlier', function () {
        const spy = sinon.spy();
        assert.isFalse(all(falsePredicate, spy)('value'));

        sinon.assert.notCalled(spy);
    });
});

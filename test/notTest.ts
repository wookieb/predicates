import not from '../src/not';
import {assert} from 'chai';
import * as sinon from 'sinon';
import {falsePredicate, truePredicate} from "./common";

describe('not', function () {

    const EXAMPLE_CONTEXT = {some: 'value'};

    it('negates function result', function () {
        assert.isFalse(not(truePredicate)(1));
        assert.isFalse(not(truePredicate)(1));
        assert.isTrue(not(falsePredicate)(1))
    });

    it('throws TypeError is predicate is not a function', function () {
        assert.throws(function () {
            not(<any>'definitely not a function')(1);
        }, TypeError, /must be a function/)
    });

    it('predicate is called with the same context and proper arguments', function () {
        const stub = sinon.stub().returns(false);

        const args = [1, 2, 3];
        assert.isTrue(not(stub).apply(EXAMPLE_CONTEXT, args));
        assert.isTrue(not.apply(EXAMPLE_CONTEXT, [stub, ...args]));

        sinon.assert.calledTwice(stub);
        sinon.assert.alwaysCalledOn(stub, EXAMPLE_CONTEXT);
        sinon.assert.alwaysCalledWith(stub, ...args);
    });
});

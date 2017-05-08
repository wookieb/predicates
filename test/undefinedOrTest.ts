import undefinedOr = require('../src/undefinedOr');
import {assert} from 'chai';
import * as sinon from 'sinon';

describe('undefinedOr', function () {
    const PREDICATE = function (value: string) {
        return typeof value === 'string';
    };
    const VALID_VALUE = 'string';

    it('returns a function if only one argument provided', function () {
        assert.isFunction(undefinedOr(PREDICATE));
    });

    it('throws TypeError if predicate is not a function', function () {
        const NOT_PREDICATE: any = 'definitely not predicate';
        assert.throws(function () {
            undefinedOr(NOT_PREDICATE)(VALID_VALUE);
        }, TypeError, /must be a function/);

        assert.throws(function () {
            undefinedOr(NOT_PREDICATE);
        }, TypeError, /must be a function/);

        assert.throws(function () {
            undefinedOr(NOT_PREDICATE, VALID_VALUE);
        }, TypeError, /must be a function/);

        assert.doesNotThrow(function () {
            undefinedOr(PREDICATE, VALID_VALUE);
        });
    });

    it('calls the predicate in the same context and forward value arguments', function () {
        const exampleContext = {example: 'context'};
        const stub = sinon.stub().returns(true);

        const args = [1, '2', null];
        undefinedOr(stub).call(exampleContext, ...args);
        undefinedOr.call(exampleContext, stub, ...args);

        sinon.assert.calledTwice(stub);
        sinon.assert.alwaysCalledOn(stub, exampleContext);
        sinon.assert.alwaysCalledWith(stub, ...args);
    });

    it('does not call the predicate if value is undefined', function () {
        const spy = sinon.spy();
        undefinedOr(spy, undefined);
        undefinedOr(spy)(undefined);

        sinon.assert.notCalled(spy);
    });

    it('checks whether value is undefined or satisfies given predicate', function () {
        assert.isTrue(undefinedOr(PREDICATE, VALID_VALUE));
        assert.isTrue(undefinedOr(PREDICATE)(VALID_VALUE));
        assert.isTrue(undefinedOr(PREDICATE, undefined));
        assert.isTrue(undefinedOr(PREDICATE)(undefined));
        assert.isFalse(undefinedOr(PREDICATE, 1));
        assert.isFalse(undefinedOr(PREDICATE)(1));
    });
});

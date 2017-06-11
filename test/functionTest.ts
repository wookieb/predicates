import isFunction from '../src/function';
import {assert} from 'chai';

describe('function', function () {
    it('returns false if value is not a function', function () {
        assert.isFalse(isFunction({}));
    });

    it('returns true is value is a function', function () {
        assert.isTrue(isFunction(function () {
        }));

        assert.isTrue(isFunction(function*(): any {
        }))
    });
});

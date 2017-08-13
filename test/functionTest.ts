import isFunction from '../src/function';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('function', function () {
    it('returns false if value is not a function', function () {
        assert.isFalse(isFunction({}));
    });

    it('returns true is value is a function', function () {
        assert.isTrue(isFunction(function () {
        }));

        assert.isTrue(isFunction(function* (): any {
        }))
    });

    it('description', () => {
        assertDescription(isFunction, 'a function');
    })
});

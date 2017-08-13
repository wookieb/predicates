import isEqual from '../src/equal';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('equal', function () {
    it('returns a function if only one argument provided', function () {
        assert.isFunction(isEqual(5));
    });

    it('returns false is value is not equal to expected one', function () {
        assert.isFalse(isEqual(5, '4'));
        assert.isFalse(isEqual(5)('4'));
    });

    it('returns true is value is equal to expected one', function () {
        assert.isTrue(isEqual(5, '5'));
        assert.isTrue(isEqual(5, 5));
        assert.isTrue(isEqual(5)('5'));
        assert.isTrue(isEqual(5)(5));
    });

    it('description', () => {
        assertDescription(isEqual(5), 'equal to 5');
        assertDescription(isEqual("test"), 'equal to "test"');
    })
});

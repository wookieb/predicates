import isTruthy from '../src/truthy';
import {assert} from 'chai';

describe('truthy', function () {
    it('checks whether a value is truthy', function () {
        assert.isTrue(isTruthy(1));
        assert.isTrue(isTruthy(true));
        assert.isFalse(isTruthy(false));
        assert.isTrue(isTruthy([]));
    });
});

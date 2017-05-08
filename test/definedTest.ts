import isDefined = require('../src/defined');
import {assert} from 'chai';

describe('defined', function () {
    it('checks whether value is not undefined', function () {
        assert.isTrue(isDefined(null));
        assert.isTrue(isDefined([]));
        assert.isFalse(isDefined(undefined));
    });
});

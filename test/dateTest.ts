import isDate = require('../src/date');
import {assert} from 'chai';

describe('date', function () {
    it('returns true if value is an instance of Date', function () {
        assert.isTrue(isDate(new Date()));
    });

    it('returns false is value is not an instance of Date', function () {
        assert.isFalse(isDate({}));
        assert.isFalse(isDate(11232341));
    });
});

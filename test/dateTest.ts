import isDate from '../src/date';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('date', function () {
    it('returns true if value is an instance of Date', function () {
        assert.isTrue(isDate(new Date()));
    });

    it('returns false is value is not an instance of Date', function () {
        assert.isFalse(isDate({}));
        assert.isFalse(isDate(11232341));
    });

    it('description', () => {
        assertDescription(isDate, 'a Date');
    })
});

import isNan from "../src/nan";
import {assert} from 'chai';

describe('NaN', () => {
    it('returns true if value is NaN', function () {
        assert.isTrue(isNan(NaN));
    });

    it('returns false if value is not NaN', function () {
        assert.isFalse(isNan(1));
        assert.isFalse(isNan(undefined));
        assert.isFalse(isNan(<any>{}));
    })
});

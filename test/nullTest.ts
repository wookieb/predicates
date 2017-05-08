import isNull = require('../src/null');
import {assert} from 'chai';

describe('null', () => {
    it('checks whether a value is null', () => {
        assert.isTrue(isNull(null));
        assert.isFalse(isNull(undefined));
        assert.isFalse(isNull(''));
    });
});

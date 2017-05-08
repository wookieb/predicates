import isFalse = require('../src/false');
import {assert} from 'chai';

describe('false', function () {
    it('returns true if value is false', function () {
        assert.ok(isFalse(false));
        assert.ok(isFalse(<any>new Boolean(false)));
    });

    it('returns false if value is not false', function () {
        assert.isFalse(isFalse(<any>new Boolean(true)));
        assert.isFalse(isFalse(true));
        assert.isFalse(isFalse(<any>''));
    });
});

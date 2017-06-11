import isWeakSet from '../src/weakSet';
import {assert} from 'chai';

(typeof WeakSet === 'function' ? describe : describe.skip)('weakSet', () => {
    it('detects WeakSet', () => {
        assert.isTrue(isWeakSet(new WeakSet()));
        assert.isFalse(isWeakSet(undefined));
        assert.isFalse(isWeakSet(null));
        assert.isFalse(isWeakSet([1, 2]));
    });

    it('Set is not WeakSet', () => {
        assert.isFalse(isWeakSet(new Set()));
    });
});
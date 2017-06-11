import isWeakMap from '../src/weakMap';
import {assert} from 'chai';

(typeof WeakMap === 'function' ? describe : describe.skip)('WeakMap', () => {
    it('detects WeakMap', () => {
        assert.isTrue(isWeakMap(new WeakMap()));
        assert.isFalse(isWeakMap(undefined));
        assert.isFalse(isWeakMap(null));
        assert.isFalse(isWeakMap([1, 2]));
    });

    it('Map is not WeakMap', () => {
        assert.isFalse(isWeakMap(new Map()));
    });
});
import isMap from '../src/map';
import {assert} from 'chai';

(typeof Map === 'function' ? describe : describe.skip)('Map', () => {
    it('detects Map', () => {
        assert.isTrue(isMap(new Map()));
        assert.isFalse(isMap([1, 2]))
        assert.isFalse(isMap(undefined))
        assert.isFalse(isMap(false))
    });

    it('WeakMap is not Map', () => {
        assert.isFalse(isMap(new WeakMap()));
    });
});
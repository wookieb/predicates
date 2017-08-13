import isThenable from '../src/thenable';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('thenable', () => {
    it('detects promise like objects', () => {
        assert.isFalse(isThenable(undefined));
        assert.isFalse(isThenable(null));
        assert.isTrue(isThenable({
            then() {
            }
        }));
    });

    (typeof Promise === 'function' ? it : it.skip)('es6 promise is thenable', () => {
        assert.isTrue(isThenable(Promise.resolve('test')));
    });

    it('description', () => {
        assertDescription(isThenable, 'a thenable object');
    });
});
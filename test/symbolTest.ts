import isSymbol from '../src/symbol';
import {assert} from 'chai';
import {assertDescription} from "./common";

(typeof Symbol === 'function' ? describe : describe.skip)('symbol', () => {
    it('detects symbol', () => {
        assert.isFalse(isSymbol(undefined));
        assert.isFalse(isSymbol(null));
        assert.isFalse(isSymbol(''));
        assert.isTrue(isSymbol(Symbol('some symbol')));
    });

    it('description', () => {
        assertDescription(isSymbol, 'a Symbol');
    });
});
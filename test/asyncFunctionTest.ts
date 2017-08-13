import isAsyncFunction from '../src/asyncFunction';
import {assert} from 'chai';
import {asyncFunctionConstructor} from '../src/utils/asyncFunctionConstructor'
import {generatorFunctionConstructor} from '../src/utils/generatorFunctionConstructor';
import {assertDescription} from "./common";

(asyncFunctionConstructor ? describe : describe.skip)('asyncFunction', () => {
    it('detects async functions', () => {
        assert.isFalse(isAsyncFunction(function () {
        }));
        assert.isFalse(isAsyncFunction(() => {
        }));
        assert.isFalse(isAsyncFunction((callback: Function) => callback()));
        assert.isFalse(isAsyncFunction(() => Promise.resolve('test')));
        assert.isFalse(isAsyncFunction(undefined));
        assert.isFalse(isAsyncFunction(null));
        assert.isFalse(isAsyncFunction(''));
        assert.isTrue(isAsyncFunction(eval('(() => async function() {})()')));
    });


    (generatorFunctionConstructor ? it : it.skip)('generators are not async functions', () => {
        assert.isFalse(isAsyncFunction(eval('(() => function*(){})()')))
    });

    it('description', () => {
        assertDescription(isAsyncFunction, 'an async function');
    });
});
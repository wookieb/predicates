import isGenerator from '../src/generator';
import {generatorFunctionConstructor} from '../src/utils/generatorFunctionConstructor';
import {asyncFunctionConstructor} from '../src/utils/asyncFunctionConstructor';
import {assert} from 'chai';
import {assertDescription} from "./common";

(generatorFunctionConstructor ? describe : describe.skip)('generator', () => {
    it('detects generator function', () => {
        assert.isFalse(isGenerator(function () {
        }));
        assert.isFalse(isGenerator(() => {
        }));
        assert.isFalse(isGenerator(null));
        assert.isFalse(isGenerator(undefined));
        assert.isTrue(isGenerator(eval('(() => function*(){})()')));
    });

    (asyncFunctionConstructor ? it : it.skip)('async functions are not generators', () => {
        assert.isFalse(isGenerator(eval('(() => async function(){})()')));
    });

    it('description', () => {
        assertDescription(isGenerator, 'a generator');
    });
});
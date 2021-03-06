import isTrue from '../src/true';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('true', function () {
    it('checks whether value is strictly true', function () {
        assert.isTrue(isTrue(true));
        assert.isTrue(isTrue(new Boolean(true)));

        assert.isFalse(isTrue(new Boolean(false)));
        assert.isFalse(isTrue(false));
        assert.isFalse(isTrue('true'));
        assert.isFalse(isTrue({}));
    });

    it('description', () => {
        assertDescription(isTrue, 'true');
    });
});

import isSet from "../src/set";
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('set', function () {
    it('check whether value is an instance of Set', () => {
        assert.isTrue(isSet(new Set()));
        assert.isFalse(isSet([]));
        assert.isFalse(isSet(undefined));
        assert.isFalse(isSet(null));
    });

    it('description', () => {
        assertDescription(isSet, 'a Set');
    })
});

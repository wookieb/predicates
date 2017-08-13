import isDefined from '../src/defined';
import {assert} from 'chai';
import {assertDescription} from "./common";

describe('defined', function () {
    it('checks whether value is not undefined', function () {
        assert.isTrue(isDefined(null));
        assert.isTrue(isDefined([]));
        assert.isFalse(isDefined(undefined));
    });

    it('description', () => {
        assertDescription(isDefined, 'not undefined');
    })
});

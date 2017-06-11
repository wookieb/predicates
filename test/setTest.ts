import isSet from "../src/set";
import {assert} from 'chai';

describe('set', function () {
    it('check whether value is an instance of Set', () => {
       assert.isTrue(isSet(new Set()));
       assert.isFalse(isSet([]));
       assert.isFalse(isSet(undefined));
       assert.isFalse(isSet(null));
    });
});

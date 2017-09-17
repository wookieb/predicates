import isValidStructure from '../src/structure';
import {assert} from 'chai';
import isString from '../src/string';
import * as sinon from 'sinon';
import {getDescription} from "../src/utils/description";

describe('structure', function () {
    const STRUCTURE = {
        key0: function (value: any) {
            return typeof value === 'string';
        },
        key1: function (value: any) {
            return typeof value === 'number';
        },
        key2: function (value: any) {
            return typeof value === 'function';
        }
    };
    const VALID_VALUE = {
        key0: 'test',
        key1: 100,
        key2: function () {
            return 'test';
        }
    };

    it('returns function if only one argument provided', function () {
        assert.isFunction(isValidStructure(STRUCTURE));
    });

    it('throws TypeError if structure is not an object', function () {
        const notObject: any = 'definitely not an object';
        assert.throws(() => {
            isValidStructure(notObject);
        }, TypeError, /must be an object/);

        assert.throws(() => {
            isValidStructure(notObject)(VALID_VALUE);
        }, TypeError, /must be an object/);
    });

    it('throws Error if structure object is empty', function () {
        assert.throws(() => {
            isValidStructure({});
        }, Error, /object cannot be empty/);

        assert.throws(function () {
            isValidStructure({})(VALID_VALUE);
        }, Error, /object cannot be empty/);
    });

    it('throws TypeError if not every property of structure is a function', function () {
        const invalidStructure: any = {
            key0: function () {
                return true;
            },
            key1: 'value'
        };

        assert.throws(function () {
            isValidStructure(invalidStructure);
        }, TypeError, /must consist of predicates/);

        assert.throws(function () {
            isValidStructure(invalidStructure)(VALID_VALUE);
        }, TypeError, /must consist of predicates/);
    });

    it('checks whether an object satisfies the structure', function () {
        const almostValidObject = {
            key0: 'string',
            key1: 100,
            key2: 'nope'
        };

        assert.isTrue(isValidStructure(STRUCTURE, VALID_VALUE));
        assert.isTrue(isValidStructure(STRUCTURE)(VALID_VALUE));

        assert.isFalse(isValidStructure(STRUCTURE, {}));
        assert.isFalse(isValidStructure(STRUCTURE)({}));

        assert.isFalse(isValidStructure(STRUCTURE, almostValidObject));
        assert.isFalse(isValidStructure(STRUCTURE)(almostValidObject));
    });

    it('stops performing further tests if one of predicates earlier has not been satisfied', function () {
        const structure = {
            key0: function (value: any) {
                return typeof value === 'string';
            },
            key1: function () {
                return false;
            },
            key2: sinon.spy()
        };

        assert.isFalse(isValidStructure(structure)({
            key0: 'string',
            key1: 1,
            key2: 2
        }));

        sinon.assert.notCalled(structure.key2);
    });

    it('predicates are called with the same context and proper arguments', function () {
        const exampleContext = {some: 'context'},
            structure = {
                key0: sinon.stub().returns(true),
                key1: sinon.stub().returns(true)
            },
            exampleObject = {
                key0: 1,
                key1: 'string'
            };

        const extraArgs = [2, 3];
        const args = [exampleObject, ...extraArgs];
        isValidStructure.call(exampleContext, structure, ...args);
        isValidStructure(structure).call(exampleContext, ...args);

        sinon.assert.calledTwice(structure.key0);
        sinon.assert.calledTwice(structure.key1);

        sinon.assert.alwaysCalledOn(structure.key0, exampleContext);
        sinon.assert.alwaysCalledOn(structure.key1, exampleContext);

        sinon.assert.calledWith(structure.key0, 1, ...extraArgs);
        sinon.assert.calledWith(structure.key1, 'string', ...extraArgs);
    });

    it('description', () => {
        const isPerson = isValidStructure({
            firstName: isString,
            lastName: isString
        });

        assert.strictEqual(getDescription(isPerson), 'an object with properties: "firstName" - a string, "lastName" - a string');
    });

    it('for simple types', () => {
        function structure(func: Function) {
            return isValidStructure({key: func});
        }

        function exampleObject(value: any) {
            return {key: value};
        }

        const noop = function () {
        };
        assert.isTrue(structure(String)(exampleObject('1')));
        assert.isTrue(structure(Boolean)(exampleObject(false)));
        assert.isTrue(structure(RegExp)(exampleObject(/a/)));
        assert.isTrue(structure(Object)(exampleObject({test: 1})));
        assert.isTrue(structure(Function)(exampleObject(noop)));
        assert.isTrue(structure(Date)(exampleObject(new Date())));
        assert.isTrue(structure(Array)(exampleObject([])));
    });
});

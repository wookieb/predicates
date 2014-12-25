'use strict';

var isValidStructure = require('../src/structure'),
    assert = require('chai').assert;

describe('structure', function() {
    var STRUCTURE = {
            key0: function(value) { return typeof value === 'string'; },
            key1: function(value) { return typeof value === 'number'; },
            key2: function(value) { return typeof value === 'function'; }
        },
        VALID_VALUE = {
            key0: 'test',
            key1: 100,
            key2: function() {
                return 'test';
            }
        };

    it('returns function if only one argument provided', function() {
        assert.ok(isValidStructure(STRUCTURE) instanceof Function);
    });

    it('throws TypeError if structure is not an object', function() {
        var notObject = 'definitely not an object';
        assert.throws(function() {
            isValidStructure(notObject);
        }, TypeError, /must be an object/);

        assert.throws(function() {
            isValidStructure(notObject)(VALID_VALUE);
        }, TypeError, /must be an object/);
    });

    it('throws Error if structure object is empty', function() {
        assert.throws(function() {
            isValidStructure({});
        }, Error, /object cannot be empty/);

        assert.throws(function() {
            isValidStructure({})(VALID_VALUE);
        }, Error, /object cannot be empty/);
    });

    it('throws TypeError if not every property of structure is a function', function() {
        var invalidStructure = {
            key0: function() { return true; },
            key1: 'value'
        };

        assert.throws(function() {
            isValidStructure(invalidStructure);
        }, TypeError, /must consist of predicates/);

        assert.throws(function() {
            isValidStructure(invalidStructure)(VALID_VALUE);
        }, TypeError, /must consist of predicates/);
    });

    it('checks whether an object satisfies the structure', function() {
        var almostValidObject = {
            key0: 'string',
            key1: 100,
            key2: 'nope'
        };

        assert.ok(isValidStructure(STRUCTURE, VALID_VALUE));
        assert.ok(isValidStructure(STRUCTURE)(VALID_VALUE));

        assert.ok(isValidStructure(STRUCTURE, {}) === false);
        assert.ok(isValidStructure(STRUCTURE)({}) === false);

        assert.ok(isValidStructure(STRUCTURE, almostValidObject) === false);
        assert.ok(isValidStructure(STRUCTURE)(almostValidObject) === false);
    });

    it('stops performing further tests if one of predicates earlier has not been satisfied', function() {
        var structure = {
            key0: function(value) { return typeof value === 'string'; },
            key1: function() { return false; },
            key2: function() { throw new Error('This predicate should not be called'); }
        };

        assert.ok(isValidStructure(structure)({
            key0: 'string',
            key1: 1,
            key2: 2
        }) === false);
    });

    it('predicates are called with the same context and proper arguments', function() {
        var exampleContext = {some: 'context'},
            structure = {
                key0: function() {
                    assert.strictEqual(exampleContext, this);
                    assert.strictEqual(arguments[0], 1);
                    assert.strictEqual(arguments[1], 2);
                    assert.strictEqual(arguments[2], 3);
                    assert.strictEqual(arguments[3], undefined);
                    return true;
                },
                key1: function() {
                    assert.strictEqual(exampleContext, this);
                    assert.strictEqual(arguments[0], 'string');
                    assert.strictEqual(arguments[1], 2);
                    assert.strictEqual(arguments[2], 3);
                    assert.strictEqual(arguments[3], undefined);
                    return true;
                }
            },
            exampleObject = {
                key0: 1,
                key1: 'string'
            };

        isValidStructure.call(exampleContext, structure, exampleObject, 2, 3);
        isValidStructure(structure).call(exampleContext, exampleObject, 2, 3);
    });
});

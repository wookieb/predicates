'use strict';

var objectOf = require('../src/objectOf'),
    assert = require('assert');

describe('objectOf', function() {
    var TRUE_PREDICATE = function() {
            return true;
        },
        EXAMPLE_OBJECT = {
            key0: 0,
            key1: 1,
            key2: 2,
            key3: 3,
            key4: 4
        },
        isNumber = function(property) {
            return typeof property === 'number';
        };

    it('returns a function if only argument provided', function() {
        assert.ok(objectOf(TRUE_PREDICATE) instanceof Function);
    });

    it('throws TypeError if predicate is not a function', function() {
        assert.throws(function() {
            objectOf('definitely not a function')('value');
        });
    });

    it('does not call all predicates if one of them has not been satisfied earlier', function() {
        var counter = 0,
            testPredicate = objectOf(function(value) {
                counter++;
                return value !== 2;
            });

        testPredicate(EXAMPLE_OBJECT);

        assert.strictEqual(3, counter);
    });

    it('calls a predicate with the same context and proper arguments', function() {
        var exampleContext = {
                some: 'context'
            },
            expectedPropertyValues = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4],
            testPredicate = function() {
                var expectedPropertyValue = expectedPropertyValues.shift();
                assert.strictEqual(exampleContext, this);
                assert.strictEqual(arguments[0], expectedPropertyValue);
                assert.strictEqual(arguments[1], 1);
                assert.strictEqual(arguments[2], 2);
                assert.strictEqual(arguments[3], 3);
                assert.strictEqual(arguments[4], undefined);
                return true;
            };

        objectOf.call(exampleContext, testPredicate, EXAMPLE_OBJECT, 1, 2, 3);
        objectOf(testPredicate).call(exampleContext, EXAMPLE_OBJECT, 1, 2, 3);
        assert.deepEqual(expectedPropertyValues, [], 'Predicate has not been called enough times');
    });

    it('checks whether every enumerable property satisfies a predicate', function() {
        var invalidObject = {
            key0: 0,
            key1: 'string'
        };
        assert.ok(objectOf(isNumber, EXAMPLE_OBJECT));
        assert.ok(objectOf(isNumber)(EXAMPLE_OBJECT));
        assert.ok(objectOf(isNumber, invalidObject) === false);
        assert.ok(objectOf(isNumber)(invalidObject) === false);
    });
});

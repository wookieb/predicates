'use strict';

var isProperty = requireSrc('property');

describe('property', function() {
    var PREDICATE = function(value) {
            return value === 2;
        },
        PROPERTY = 'propertyName';

    it('requires predicates to be a function', function() {
        assert.throws(function() {
            isProperty(PROPERTY, 'test');
        }, TypeError, /Predicate is not a function/i);
    });

    it('requires at least 2 arguments', function() {
        assert.throws(function() {
            isProperty(PROPERTY);
        }, Error, /Too few arguments/);
    });

    it('returns a predicate if 2 arguments provided', function() {
        assert.ok(isProperty(PROPERTY, PREDICATE) instanceof Function);
    });

    it('automatically fails if provided value is not an object', function() {
        var NOT_AN_OBJECT = 'test',
            PREDICATE = function() {
                assert.fail('Predicate should not be called since given value is not an object');
            };

        assert.ok(isProperty(PROPERTY, PREDICATE, NOT_AN_OBJECT) === false);
        assert.ok(isProperty(PROPERTY, PREDICATE)(NOT_AN_OBJECT) === false);
    });

    it('calls predicate in the same context', function() {
        var callCounter = 0,
            CONTEXT = {custom: 'context'},
            PREDICATE = function() {
                assert.deepEqual(this, CONTEXT);
                callCounter++;
                return true;
            };

        assert.ok(isProperty.call(CONTEXT, PROPERTY, PREDICATE, {}));
        assert.ok(isProperty(PROPERTY, PREDICATE).call(CONTEXT, {}));

        assert.strictEqual(callCounter, 2, 'Predicate has not been called 2 times');
    });

    it('calls predicate with additional arguments', function() {
        var callCounter = 0,
            ARG_1 = 'custom argument 1',
            ARG_2 = {custom: 'object'},
            PREDICATE = function(value, arg1, arg2) {
                assert.strictEqual(arg1, ARG_1);
                assert.strictEqual(arg2, ARG_2);
                callCounter++;
                return true;
            };

        assert.ok(isProperty(PROPERTY, PREDICATE, {}, ARG_1, ARG_2));
        assert.ok(isProperty(PROPERTY, PREDICATE)({}, ARG_1, ARG_2));

        assert.strictEqual(callCounter, 2, 'Predicate has not been called 2 times');
    });


    it('checks whether a property value satisfies given predicate', function() {
        var VALID_OBJECT = {},
            VALID_OBJECT2 = Object.create(null);
        VALID_OBJECT[PROPERTY] = 2;
        VALID_OBJECT2[PROPERTY] = 2;

        var INVALID_OBJECT = {},
            INVALID_OBJECT2 = {};
        INVALID_OBJECT2[PROPERTY] = '2';

        assert.ok(isProperty(PROPERTY, PREDICATE, VALID_OBJECT));
        assert.ok(isProperty(PROPERTY, PREDICATE)(VALID_OBJECT));

        assert.ok(isProperty(PROPERTY, PREDICATE, VALID_OBJECT2));
        assert.ok(isProperty(PROPERTY, PREDICATE)(VALID_OBJECT2));

        assert.ok(isProperty(PROPERTY, PREDICATE, INVALID_OBJECT) === false);
        assert.ok(isProperty(PROPERTY, PREDICATE)(INVALID_OBJECT) === false);

        assert.ok(isProperty(PROPERTY, PREDICATE, INVALID_OBJECT2) === false);
        assert.ok(isProperty(PROPERTY, PREDICATE)(INVALID_OBJECT2) === false);
    });
});
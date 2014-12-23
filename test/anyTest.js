'use strict';

var any = require('../src/any'),
    assert = require('assert');

describe('any', function() {
    var TRUE_PREDICATE = function() {
            return true;
        },
        FALSE_PREDICATE = function() {
            return false;
        };

    it('returns a function', function() {
        assert.ok(any(TRUE_PREDICATE, FALSE_PREDICATE) instanceof Function);
    });

    it('throws error if not every predicate is a function', function() {
        assert.throws(function() {
            any(TRUE_PREDICATE, 'definitely not a function');
        });
    });

    it('throws error if zero or only one predicate provided', function() {
        assert.throws(function() {
            any();
        }, Error, 'need to provide at least two predicates');

        assert.throws(function() {
            any(TRUE_PREDICATE);
        }, Error, 'need to provide at least two predicates');

        assert.doesNotThrow(function() {
            any(TRUE_PREDICATE, FALSE_PREDICATE);
        });
    });

    it('calls predicates in order', function() {
        var counter = 0;
        any(function() {
            assert.strictEqual(counter, 0);
            counter++;
        }, function() {
            assert.strictEqual(counter, 1);
            counter++;
        }, function() {
            assert.strictEqual(counter, 2);
            counter++;
        })('value');
        assert.strictEqual(counter, 3, 'Not all predicates have been called');
    });

    it('calls predicates with correct context and arguments', function() {
        var args = [1, 2, 3, 4],
            context = {example: 'context'},
            predicate = function(arg1, arg2, arg3, arg4, arg5) {
                assert.strictEqual(context, this);
                assert.strictEqual(arg1, 1);
                assert.strictEqual(arg2, 2);
                assert.strictEqual(arg3, 3);
                assert.strictEqual(arg4, 4);
                assert.strictEqual(arg5, undefined);
                return false;
            },
            testPredicate = any(predicate, predicate, predicate, predicate);

        assert.ok(!testPredicate.apply(context, args));
    });

    it('checks whether at least one predicate has been satisfied', function() {
        assert.ok(any(FALSE_PREDICATE, TRUE_PREDICATE, FALSE_PREDICATE)('value'));
        assert.ok(any(FALSE_PREDICATE, FALSE_PREDICATE)('value') === false);
    });

    it('does not call all predicates if one of them has been satisfied earlier', function() {
        assert.ok(any(TRUE_PREDICATE, function() {
            throw new Error('Last predicate should not be called');
        })('value'));
    });
});

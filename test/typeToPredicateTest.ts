import {assert} from 'chai';
import * as is from '../src';
import {getPredicateForType} from "../src/typeToPredicate";

it('type to predicate', () => {
    assert.strictEqual(getPredicateForType(String), is.string);
    assert.strictEqual(getPredicateForType(Boolean), is.boolean);
    assert.strictEqual(getPredicateForType(RegExp), is.regexp);
    assert.strictEqual(getPredicateForType(Number), is.number);
    assert.strictEqual(getPredicateForType(Object), is.object);
    assert.strictEqual(getPredicateForType(Function), is.function);
    assert.strictEqual(getPredicateForType(Date), is.date);
    assert.strictEqual(getPredicateForType(Array), is.array);
    assert.strictEqual(getPredicateForType(Symbol), is.symbol);
    assert.strictEqual(getPredicateForType(WeakMap), is.weakMap);
    assert.strictEqual(getPredicateForType(WeakSet), is.weakSet);
});
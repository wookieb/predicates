import {assert} from 'chai';
import {getDescription} from "../src/utils/description";

export function truePredicate() {
    return true;
}

export function falsePredicate() {
    return false;
}

export function assertDescription(predicate: any, expectedDescription: string) {
    assert.strictEqual(getDescription(predicate), expectedDescription, 'invalid predicate description');
}
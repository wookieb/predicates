import {Predicate} from "../types";

export const descriptionKey = '__predicateDescription';

/**
 * Sets description of predicate.
 *
 * Underneath assigns a non-enumerable property to a given predicate
 *
 * @example
 *
 * function customPredicate(value) {
 *  // implementation
 * }
 *
 * is.setDescription(customPredicate, 'some custom description')
 * is.getDescription(customPredicate); // 'some custom description'
 */
export function setDescription<T extends Predicate>(predicate: T, desc: string): T {
    Object.defineProperty(predicate, descriptionKey, {
        value: desc,
        enumerable: false
    });
    return predicate;
}

/**
 * Returns predicate description
 *
 * @example
 * is.getDescription(is.string); // 'a string'
 *
 * function someCustomPredicate(value) {
 *   // implementation
 * }
 * is.getDescription(someCustomPredicate); // 'satisfied custom predicate "someCustomPredicate"'
 *
 * is.getDescription(function(value) {}); // 'satisfied custom predicate "anonymous"'
 */
export function getDescription(predicate: Predicate) {
    const desc = (<any>predicate)[descriptionKey];
    if (typeof desc === 'string') {
        return desc;
    }
    return 'satisfies custom predicate "' + ((<any>predicate).name || 'anonymous') + '"';
}
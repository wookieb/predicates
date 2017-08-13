import {Predicate} from "../types";

export const descriptionKey = '__predicateDescription';

/**
 * Sets description of predicate
 *
 * @param {Predicate} predicate
 * @param {string} desc
 * @returns {Predicate}
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
 * @param {Predicate} predicate
 * @returns {string}
 */
export function getDescription(predicate: Predicate) {
    const desc = (<any>predicate)[descriptionKey];
    if (typeof desc === 'string') {
        return desc;
    }
    return 'satisfies custom predicate "' + ((<any>predicate).name || 'anonymous') + '"';
}
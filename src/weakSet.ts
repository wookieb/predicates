/**
 * Checks whether value is WeakSet
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from "./utils/description";

export default function isWeakSet(value: any): boolean {
    return typeof WeakSet !== 'undefined' && value instanceof WeakSet;
}

setDescription(isWeakSet, 'a WeakSet');
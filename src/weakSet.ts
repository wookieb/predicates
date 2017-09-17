/**
 * Checks whether value is WeakSet
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from './utils/description';

export default function isWeakSet<T = any>(value: any): value is WeakSet<T> {
    return typeof WeakSet !== 'undefined' && value instanceof WeakSet;
}

setDescription(isWeakSet, 'a WeakSet');

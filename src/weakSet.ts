import {setDescription} from './utils/description';

/**
 * Checks whether value is an instance of WeakSet
 */
export default function isWeakSet<T = any>(value: any): value is WeakSet<T> {
    return typeof WeakSet !== 'undefined' && value instanceof WeakSet;
}

setDescription(isWeakSet, 'a WeakSet');

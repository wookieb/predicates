import {setDescription} from './utils/description';

/**
 * Checks whether value is an instance of WeakSet
 */
export default function isWeakSet<T extends object = any>(value: any): value is WeakSet<T> {
    return typeof WeakSet !== 'undefined' && value instanceof WeakSet;
}

setDescription(isWeakSet, 'a WeakSet');

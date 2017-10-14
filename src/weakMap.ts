import {setDescription} from './utils/description';

/**
 * Checks whether value is an instance of WeakMap
 */
export default function isWeakMap<K extends object = any, B = any>(value: any): value is WeakMap<K, B> {
    return typeof WeakMap !== 'undefined' && value instanceof WeakMap;
}
setDescription(isWeakMap, 'a WeakMap');
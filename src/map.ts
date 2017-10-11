import {setDescription} from './utils/description';

/**
 * Check whether value is Map
 *
 * **Type guard:** value is Map<K = any, V = any>
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isMap<K = any, V = any>(value: any): value is Map<K, V> {
    return typeof Map !== 'undefined' && value instanceof Map;
}

setDescription(isMap, 'a Map');
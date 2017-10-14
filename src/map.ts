import {setDescription} from './utils/description';

/**
 * Check whether value is an instance of Map
 */
export default function isMap<K = any, V = any>(value: any): value is Map<K, V> {
    return typeof Map !== 'undefined' && value instanceof Map;
}

setDescription(isMap, 'a Map');
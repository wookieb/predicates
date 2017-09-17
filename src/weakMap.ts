/**
 * Checks whether value is WeakMap
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from './utils/description';

export default function isWeakMap<K extends object = any, B = any>(value: any): value is WeakMap<K,B> {
    return typeof WeakMap !== 'undefined' && value instanceof WeakMap;
}
setDescription(isWeakMap, 'a WeakMap');
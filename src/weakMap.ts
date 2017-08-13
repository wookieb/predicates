/**
 * Checks whether value is WeakMap
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from "./utils/description";

export default function isWeakMap(value: any): boolean {
    return typeof WeakMap !== 'undefined' && value instanceof WeakMap;
}
setDescription(isWeakMap, 'a WeakMap');
/**
 * Checks whether value is Set
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from './utils/description';

export default function isSet<T = any>(value: any): value is Set<T> {
    return typeof Set !== 'undefined' && value instanceof Set;
}
setDescription(isSet, 'a Set');
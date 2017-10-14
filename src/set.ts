import {setDescription} from './utils/description';

/**
 * Checks whether value is Set
 *
 */
export default function isSet<T = any>(value: any): value is Set<T> {
    return typeof Set !== 'undefined' && value instanceof Set;
}
setDescription(isSet, 'a Set');